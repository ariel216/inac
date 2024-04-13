import type { APIRoute } from 'astro';
import { turso } from '../../turso';

export const POST: APIRoute = async ({ request }) => {

    if (request.headers.get("Content-Type") === "application/json") {
        const body = await request.json();
        const {nro_documento, nombres, direccion, telefono, correo, id_carrera} = body;

        const registrosPrevios = await verificar(correo);

        if((registrosPrevios).length>0){
          return new Response(JSON.stringify({
            codigo: 0,
            mensaje:  `El correo ${correo} ya fue registrado`, 
          }), {
            status: 400
          })
        }

        const {rows} = await turso.execute({
          sql: `insert into alumnos (nro_documento, nombres, direccion, telefono)
                values(?,?,?,?) RETURNING *`,
          args: [nro_documento, nombres, direccion, telefono]
        });
        
        const id_alumno = rows[0]?.id_alumno;

        await turso.execute({
          sql: `insert into preinscripciones (id_alumno, id_carrera, correo)
                values(?,?,?)`,
          args: [id_alumno, id_carrera, correo]
        });

        return new Response(JSON.stringify({
          codigo: 1,
          mensaje: "Registro Correto",          
          contenido: {
            "id_alumno": id_alumno
          }
        }), {
          status: 200
        })
    }
    return new Response(null, { status: 400 });
}

const verificar = async (correo:string)=>{
  const {rows} = await turso.execute({
    sql: `select * from preinscripciones where correo = ? `,
    args: [correo]
  });
  return rows;
}