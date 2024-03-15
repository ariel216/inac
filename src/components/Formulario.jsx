import { useState, useEffect } from 'preact/hooks'

export default function Formulario() {
    const currentUrl = window.location.href;
    const arrayUrl= currentUrl.split("/");
    const [requisitos, setRequisitos] = useState([]);

    useEffect(() => { 
        fetch(`http://localhost:4321/api/requisitos/${arrayUrl[4]}`)
        .then((response) => response.json())  
        .then((data) => setRequisitos(data.contenido));
    }, []);

    return (
        <>            
            <article class="flex w-screen">
                <form class="bg-gray-100 rounded-lg shadow-lg px-6 pt-4 pb-6 mb-4">
                    {requisitos.map((item)=>(
                        <div class="mb-3">
                            <label class="block text-gray-700 text-sm font-bold mb-1" for="nombre">
                                {item.descripcion}
                            </label>
                            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight border-indigo-900 focus:outline-none focus:shadow-md focus:shadow-indigo-200" id="nombre" type="file" placeholder="Nombre" />
                        </div>
                    ))}
                </form>         
            </article>
            <article class="flex w-dvw">
                <form class="bg-gray-100 rounded-lg shadow-lg px-6 pt-4 pb-6 mb-4">
                    <div class="mb-3">
                        <label class="block text-gray-700 text-sm font-bold mb-1" for="nombre">
                            Nro. Carnet:
                        </label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight border-indigo-900 focus:outline-none focus:shadow-md focus:shadow-indigo-200" id="nro_carnet" type="text" placeholder="Nro. Carnet" />
                    </div>
                    <div class="mb-3">
                        <label class="block text-gray-700 text-sm font-bold mb-1" for="nombre">
                            Nombres:
                        </label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight border-indigo-900 focus:outline-none focus:shadow-md focus:shadow-indigo-200" id="nombres" type="text" placeholder="Nombres" />
                    </div>
                    <div class="mb-3">
                        <label class="block text-gray-700 text-sm font-bold mb-1" for="nombre">
                            Primer Apellido:
                        </label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight border-indigo-900 focus:outline-none focus:shadow-md focus:shadow-indigo-200" id="primer_apellido" type="text" placeholder="Primer Apellido" />
                    </div>
                    <div class="mb-3">
                        <label class="block text-gray-700 text-sm font-bold mb-1" for="nombre">
                            Segundo Apellido:
                        </label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight border-indigo-900 focus:outline-none focus:shadow-md focus:shadow-indigo-200" id="segundo_apellidos" type="text" placeholder="Segundo Apellido" />
                    </div>
                    <div class="mb-3">
                        <label class="block text-gray-700 text-sm font-bold mb-1" for="nombre">
                            Fecha Nac. 
                        </label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight border-indigo-900 focus:outline-none focus:shadow-md focus:shadow-indigo-200" id="fecnac" type="date" placeholder="Fecha Nac." />
                    </div>
                    <div class="mb-3">
                        <label class="block text-gray-700 text-sm font-bold mb-1" for="nombre">
                            Teléfono:
                        </label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight border-indigo-900 focus:outline-none focus:shadow-md focus:shadow-indigo-200" id="telefono" type="text" placeholder="Teléfono" />
                    </div>
                    <div class="mb-3">
                        <label class="block text-gray-700 text-sm font-bold mb-1" for="nombre">
                            Correo:
                        </label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight border-indigo-900 focus:outline-none focus:shadow-md focus:shadow-indigo-200" id="correo" type="email" placeholder="Correo" />
                    </div>
                </form>
            </article>
        </>
    )
}
