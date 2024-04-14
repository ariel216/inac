/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, j as Fragment, k as renderSlot, l as renderHead } from '../astro_JV1241Tp.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                           */
import { g as getSession } from './__DEaPqW_I.mjs';
import 'clsx';

const logo = new Proxy({"src":"/_astro/logo.ChQx05ID.svg","width":30,"height":33,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ariel216/Desarrollo/inac/src/assets/images/logo.svg";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Navbar;
  const session = await getSession(Astro2.request);
  return renderTemplate`${maybeRenderHead()}<header class="fixed w-full"> <nav class="bg-white border-gray-200 py-2.5 dark:bg-gray-900"> <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto"> <a href="#" class="flex items-center"> <img${addAttribute(logo.src, "src")} class="h-6 mr-3 sm:h-9" alt="INAC Logo"> <span class="self-center text-xl font-semibold whitespace-nowrap ">INAC</span> </a> <div class="flex items-center lg:order-2"> ${session !== null ? renderTemplate`<button id="logout" class="bg-slate-200 text-black p-1 rounded-md hover:bg-slate-300">Cerrar Sesión</button>` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {})}`} <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false"> <span class="sr-only">Menu</span> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg> <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> </button> </div> <div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2"> <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"> <li> <a href="/" class="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white" aria-current="page">
Inicio
</a> </li> <li> <a href="/#carreras" class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
Carreras
</a> </li> <li> <a href="nosotros" class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
¿Por qué nosotros?
</a> </li> <li> <a href="acerca" class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
Acerca de
</a> </li> </ul> </div> </div> </nav> </header> `;
}, "/home/ariel216/Desarrollo/inac/src/components/Navbar.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const gestion = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-white dark:bg-gray-800"> <div class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10"> <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"> <div class="text-center"> <a href="#" class="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"> <!-- <img src={logo.src} class="h-6 mr-3 sm:h-9" alt="Landwind Logo" /> -->
INAC
</a> <span class="block text-sm text-center text-gray-500 dark:text-gray-400">© ${gestion} INAC. Por <a href="https://ades.dev" class="text-purple-600 hover:underline dark:text-purple-500">Adesdev</a>.
</span> <ul class="flex justify-center mt-5 space-x-5"> <li> <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path></svg> </a> </li> <li> <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg> </a> </li> </ul> </div> </div> </footer>`;
}, "/home/ariel216/Desarrollo/inac/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="es"> <head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', ' - INAC</title><!-- Meta SEO --><meta name="title" content="INAC Inscripciones"><meta name="description" content="Sitio para inscripciones INAC"><meta name="robots" content="index, follow"><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="language" content="Spanish"><meta name="author" content="Ades dev"><!-- Favicon --><!-- <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">\n    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"> --><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="manifest" href="/site.webmanifest"><meta name="msapplication-TileColor" content="#da532c"><meta name="theme-color" content="#ffffff"><!-- <script async defer src="https://buttons.github.io/buttons.js"><\/script> -->', "</head> <body> ", " <section> ", " </section> ", "  </body> </html>"])), title, renderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/home/ariel216/Desarrollo/inac/src/pages/layout.astro", void 0);

const $$file = "/home/ariel216/Desarrollo/inac/src/pages/layout.astro";
const $$url = "/layout";

export { $$Layout as default, $$file as file, $$url as url };
