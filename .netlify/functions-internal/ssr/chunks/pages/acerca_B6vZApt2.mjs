/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent } from '../astro_JV1241Tp.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import $$Layout from './layout_DA7qCYJ5.mjs';

const $$Astro$1 = createAstro();
const $$Blockquote = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Blockquote;
  return renderTemplate`${maybeRenderHead()}<section class="bg-gray-50 dark:bg-gray-800"> <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6"> <figure class="max-w-screen-md mx-auto"> <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"></path> </svg> <blockquote> <p class="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">Formamos profesionales con integridad y preparación para el un mundo laboral cada vez más competitivo y cambiante.</p> </blockquote> </figure> </div> </section>`;
}, "/home/ariel216/Desarrollo/inac/src/components/Blockquote.astro", void 0);

const $$Astro = createAstro();
const $$Acerca = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Acerca;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Acerca de" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Blockquote", $$Blockquote, {})} ` })}`;
}, "/home/ariel216/Desarrollo/inac/src/pages/acerca.astro", void 0);

const $$file = "/home/ariel216/Desarrollo/inac/src/pages/acerca.astro";
const $$url = "/acerca";

export { $$Acerca as default, $$file as file, $$url as url };
