import type { APIRoute } from 'astro';
import { turso } from '../../../turso';

export const GET: APIRoute = async ({ params, request }) => {
    const { id } = params;
    const { rows } = await turso.execute({
        sql: 'SELECT * FROM requisitos WHERE id_carrera = ?',
        args: [id!]
    })
    return new Response(JSON.stringify({
            codigo:1,
            mensaje: "Correcto",
            contenido: rows
        })
    )
}