/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent } from '../astro_JV1241Tp.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import $$Layout from './layout_DA7qCYJ5.mjs';

const right = new Proxy({"src":"/_astro/right.BvjW9blR.webp","width":1059,"height":879,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ariel216/Desarrollo/inac/src/assets/images/right.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro();
const $$LeftRight = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LeftRight;
  return renderTemplate`${maybeRenderHead()}<section class="bg-gray-50 dark:bg-gray-800"> <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6"> <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16"> <div class="text-gray-500 sm:text-lg dark:text-gray-400"> <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">¿Por qué estudiar con nosotros?</h2> <p class="mb-8 font-light lg:text-xl">Contamos con docentes especializados en el área, asi garantizamos una taza alta de aprendizaje</p> <ul role="list" class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"> <li class="flex space-x-3"> <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Clases presenciales</span> </li> <li class="flex space-x-3"> <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">laboratorios bien equipados y funcionales</span> </li> <li class="flex space-x-3"> <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">El certificado otorgado tiene un valor curricular a nivel nacional</span> </li> </ul> <p class="mb-8 font-light lg:text-xl">Cada alumno contará con una máquina personal, con acceso a internet y todos los programas necesarios para la clase</p> </div> <img class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"${addAttribute(right.src, "src")} alt="dashboard feature image"> </div> </div> </section>`;
}, "/home/ariel216/Desarrollo/inac/src/components/LeftRight.astro", void 0);

const $$Astro = createAstro();
const $$Nosotros = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Nosotros;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Docentes" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LeftRight", $$LeftRight, {})} ` })}`;
}, "/home/ariel216/Desarrollo/inac/src/pages/nosotros.astro", void 0);

const $$file = "/home/ariel216/Desarrollo/inac/src/pages/nosotros.astro";
const $$url = "/nosotros";

export { $$Nosotros as default, $$file as file, $$url as url };
