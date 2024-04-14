import { renderers } from './renderers.mjs';
import { manifest } from './manifest_C2wE2Vrm.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_CYsms-Cu.mjs');
const _page1 = () => import('./chunks/_.._DC3KO_9M.mjs');
const _page2 = () => import('./chunks/acerca_vyCeI-xg.mjs');
const _page3 = () => import('./chunks/preinscripcion_BldakqEB.mjs');
const _page4 = () => import('./chunks/layout_B8cqMup1.mjs');
const _page5 = () => import('./chunks/nosotros_DwGu8eT0.mjs');
const _page6 = () => import('./chunks/_.._omBs1dhk.mjs');
const _page7 = () => import('./chunks/index_maKzAHbp.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/auth-astro/src/api/[...auth].ts", _page1],
    ["src/pages/acerca.astro", _page2],
    ["src/pages/api/preinscripcion.ts", _page3],
    ["src/pages/layout.astro", _page4],
    ["src/pages/nosotros.astro", _page5],
    ["src/pages/requisitos/[...id_carrera].astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "00898f10-2d79-4d00-b201-07e5d792882c"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
