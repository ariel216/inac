/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent } from '../astro_JV1241Tp.mjs';
import 'kleur/colors';
import 'html-escaper';
import { g as getSession } from './__DEaPqW_I.mjs';
import $$Layout from './layout_DA7qCYJ5.mjs';
import { createClient } from '@libsql/client/web';
import 'clsx';

const turso = createClient({
  url: "libsql://inac-ariel216.turso.io",
  authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MTI4NjYzNDQsImlkIjoiMmZmOGRhNmItZGQzZi00M2NhLWE1NDAtZTczYjgyZDU5MTQ3In0.zaAxpeYfX5rONVBiRqQDbBBJu3tQKrYu2U5-jDjgxfh--SeGF87gmDz1J3Prz3Xi7_80bQDRdsMTLxzXBUa9Cw"
});

const $$Astro$5 = createAstro();
const $$Requisitos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Requisitos;
  const { id } = Astro2.props;
  const { rows } = await turso.execute({
    sql: "SELECT * FROM requisitos WHERE id_carrera = ?",
    args: [id]
  });
  return renderTemplate`${rows.map((item) => renderTemplate`${maybeRenderHead()}<li class="flex space-x-3"><svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span class="text-base font-medium leading-tight text-gray-900 dark:text-white">${item.descripcion}</span></li>`)}`;
}, "/home/ariel216/Desarrollo/inac/src/components/Requisitos.astro", void 0);

const $$Astro$4 = createAstro();
const $$Ventajas = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Ventajas;
  const { id } = Astro2.props;
  const { rows } = await turso.execute({
    sql: "SELECT * FROM ventajas WHERE id_carrera = ?",
    args: [id]
  });
  return renderTemplate`${rows.map((ventaja) => renderTemplate`${maybeRenderHead()}<li class="flex items-center space-x-3"><svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg><span>${ventaja.descripcion}</span></li>`)}`;
}, "/home/ariel216/Desarrollo/inac/src/components/Ventajas.astro", void 0);

const $$Astro$3 = createAstro();
const $$Form = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Form;
  const { id } = Astro2.props;
  const session = await getSession(Astro2.request);
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col"> <div class="flex flex-col space-y-2 items-center justify-center mb-5"> <h2 class="font-light lg:text-xl mb-4">Formulario de Preinscripción:</h2> <img class="rounded-full w-32"${addAttribute(session?.user?.image, "src")}${addAttribute(session?.user?.email, "alt")}> <p>${session?.user?.name}</p> <p>${session?.user?.email}</p> </div> <form id="loginForm"> <input type="text"${addAttribute(id, "value")} id="id_carrera" hidden> <input type="text"${addAttribute(session?.user?.email, "value")} id="correo" hidden> <input type="text"${addAttribute(session?.user?.name, "value")} id="nombres" hidden> <div class="flex flex-col mb-3"> <label for="">Nro. Carnet:</label> <input type="text" name="nro_documento" id="nro_documento" class="w-full rounded-lg" placeholder="Ingresa tu número de carnet"> </div> <div class="flex flex-col mb-3"> <label for="">Dirección:</label> <input type="text" name="direccion" id="direccion" class="w-full rounded-lg" placeholder="Ingresa tu dirección"> </div> <div class="flex flex-col mb-3"> <label for="">Teléfono:</label> <input type="number" name="telefono" id="telefono" class="w-full rounded-lg" placeholder="Ingresa tu número de teléfono"> </div> <p class="font-light text-balance lg:text-xl mb-4 text-center mt-3">
Asegúrate de contar con <span class="font-bold text-black">todos los Requisitos</span> al momento de la inscripción.
</p> <div class="flex items-center justify-center mt-4"> <button id="btn" type="submit" class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"> Preinscribir</button> </div> </form> <div id="message" hidden class="text-gray-500 sm:text-lg dark:text-gray-400 mt-5 text-center"> <p class="font-light lg:text-xl mb-4" id="textMessage"></p> <a href="/" class="bg-slate-200 text-black px-3 py-2 rounded-md hover:bg-slate-300"> Inicio</a> </div> </div> `;
}, "/home/ariel216/Desarrollo/inac/src/components/Form.astro", void 0);

const $$Astro$2 = createAstro();
const $$Preinscripcion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Preinscripcion;
  const { id } = Astro2.props;
  const { rows } = await turso.execute({
    sql: "SELECT * FROM carrera WHERE id_carrera = ?",
    args: [id]
  });
  const carrera = rows[0];
  return renderTemplate`${maybeRenderHead()}<section class="bg-gray-50 dark:bg-gray-800"> <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6"> <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16"> ${renderComponent($$result, "Form", $$Form, { "id": id })} <div class="text-gray-500 sm:text-lg dark:text-gray-400"> <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">${carrera.nombre}</h2> <p class="mb-8 font-light lg:text-xl">${carrera.descripcion}</p> <ul role="list" class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"> <p class="font-light lg:text-xl">Requisitos:</p> ${renderComponent($$result, "Requisitos", $$Requisitos, { "id": id })} </ul> <p class="font-light lg:text-xl mb-4">Características:</p> ${renderComponent($$result, "Ventajas", $$Ventajas, { "id": id })}</div> </div> </div> </section>`;
}, "/home/ariel216/Desarrollo/inac/src/components/Preinscripcion.astro", void 0);

const $$Astro$1 = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Login;
  return renderTemplate`${maybeRenderHead()}<section class="bg-gray-50 dark:bg-gray-800"> <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6"> <div class="max-w-screen-sm mx-auto text-center"> <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Para continuar con la Preinscripción, debes iniciar sesión.</p> <button id="login" class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Iniciar Sesión</button> </div> </div> </section> `;
}, "/home/ariel216/Desarrollo/inac/src/components/Login.astro", void 0);

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { id_carrera } = Astro2.params;
  const session = await getSession(Astro2.request);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Requisitos" }, { "default": ($$result2) => renderTemplate`  ${session === null ? renderTemplate`${renderComponent($$result2, "Login", $$Login, {})}` : renderTemplate`${renderComponent($$result2, "Preinscripcion", $$Preinscripcion, { "id": id_carrera })}`}` })}`;
}, "/home/ariel216/Desarrollo/inac/src/pages/requisitos/[...id_carrera].astro", void 0);

const $$file = "/home/ariel216/Desarrollo/inac/src/pages/requisitos/[...id_carrera].astro";
const $$url = "/requisitos/[...id_carrera]";

const ____id_carrera_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Ventajas as $, ____id_carrera_ as _, turso as t };
