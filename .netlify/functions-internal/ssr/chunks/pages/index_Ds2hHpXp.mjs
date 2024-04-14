/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent, e as addAttribute } from '../astro_JV1241Tp.mjs';
import 'kleur/colors';
import 'html-escaper';
import $$Layout from './layout_DA7qCYJ5.mjs';
import { $ as $$Ventajas, t as turso } from './__Bxam_qxN.mjs';

const hero = new Proxy({"src":"/_astro/hero.B7otvH1T.webp","width":1090,"height":706,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ariel216/Desarrollo/inac/src/assets/images/hero.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Card;
  const { carrera } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"> <h3 class="mb-4 text-2xl font-semibold">${carrera.nombre}</h3> <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">${carrera.descripcion}</p> <div class="flex items-baseline justify-center my-8"> <span class="mr-2 text-5xl font-extrabold">${carrera.costo_mes} Bs.-</span> <span class="text-gray-500 dark:text-gray-400">/mes</span> </div> <ul role="list" class="mb-8 space-y-4 text-left"> ${renderComponent($$result, "Ventajas", $$Ventajas, { "id": carrera.id_carrera })} </ul> <a${addAttribute(`requisitos/${carrera.id_carrera}`, "href")} class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">Preinscribir</a> </div>`;
}, "/home/ariel216/Desarrollo/inac/src/components/Card.astro", void 0);

const $$Astro$1 = createAstro();
const $$Pricing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pricing;
  const { rows } = await turso.execute("SELECT * FROM carrera");
  return renderTemplate`${maybeRenderHead()}<section id="carreras" class="bg-white dark:bg-gray-900"> <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6"> <div class="max-w-screen-md mx-auto mb-8 text-center lg:mb-12"> <h2 class="mb-4 text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">Conoce nuestras Carreras</h2> <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Nuestros nuestros docentes, con años de experiencia avalan la calidad de enseñanza</p> </div> <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0"> ${rows.map((carrera) => renderTemplate`${renderComponent($$result, "Card", $$Card, { "carrera": carrera })}`)} </div> </div> </section>`;
}, "/home/ariel216/Desarrollo/inac/src/components/Pricing.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Inicio" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-white dark:bg-gray-900"> <div class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28"> <div class="mr-auto place-self-center lg:col-span-5"> <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight text-balance md:text-5xl xl:text-6xl">INAC - Instituto Autónomo de Computación </h1> <p class="max-w-2xl mb-6 font-light text-gray-500 text-balance lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Carreras a nivel medio y superior en el área de Informática, </p> <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4"> <a href="#carreras" class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Ver Carreras</a> <!--<a href="https://www.figma.com/community/file/1125744163617429490" class="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
						<svg class="w-4 h-4 mr-2" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300" width="1667" height="2500"><style type="text/css">.st0{fill:#0acf83}.st1{fill:#a259ff}.st2{fill:#f24e1e}.st3{fill:#ff7262}.st4{fill:#1abcfe}</style><title>Figma.logo</title><desc>Created using Figma</desc><path id="path0_fill" class="st0" d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z"/><path id="path1_fill" class="st1" d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"/><path id="path1_fill_1_" class="st2" d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z"/><path id="path2_fill" class="st3" d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z"/><path id="path3_fill" class="st4" d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"/></svg> Get Figma file
					</a> --> </div> </div> <div class="hidden lg:mt-0 lg:col-span-7 lg:flex"> <img${addAttribute(hero.src, "src")} alt="Estudiantes Inac"> </div> </div> </section> ${renderComponent($$result2, "Pricing", $$Pricing, {})} ` })}`;
}, "/home/ariel216/Desarrollo/inac/src/pages/index.astro", void 0);

const $$file = "/home/ariel216/Desarrollo/inac/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
