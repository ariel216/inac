import type { APIRoute } from 'astro';
import type { Session } from '@auth/core/types';


export const POST: APIRoute = async ({ request }) => {

    if (request.headers.get("Content-Type") === "application/json") {
        const body = await request.json();
        const nro_carnet = body.nro_carnet;
        const nombres = body.nombres;
        const primer_apellido = body.primer_apellido;
        const segundo_apellido = body.segundo_apellido;
        const direccion = body.direccion;
        const telefono = body.telefono;

        return new Response(JSON.stringify({
          mensaje: "Registro Correto",
          codigo: 1,
          contenido: {
            "nro_carnet":nro_carnet,
            "nombres":nombres,
            "primer_apellido":primer_apellido,
            "segundo_apellido":segundo_apellido,
            "direccion":direccion,
            "telefono":telefono
          }
        }), {
          status: 200
        })
    }
    return new Response(null, { status: 400 });
}