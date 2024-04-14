import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_JV1241Tp.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/api/auth/[...auth]","pattern":"^\\/api\\/auth(?:\\/(.*?))?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"...auth","dynamic":true,"spread":true}]],"params":["...auth"],"component":"node_modules/auth-astro/src/api/[...auth].ts","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.va2BcLGF.js"}],"styles":[{"type":"external","src":"/_astro/acerca.cOGV178G.css"},{"type":"external","src":"/_astro/layout.dTLFyGBv.css"}],"routeData":{"route":"/acerca","isIndex":false,"type":"page","pattern":"^\\/acerca\\/?$","segments":[[{"content":"acerca","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/acerca.astro","pathname":"/acerca","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/preinscripcion","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/preinscripcion\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"preinscripcion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/preinscripcion.ts","pathname":"/api/preinscripcion","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.va2BcLGF.js"}],"styles":[{"type":"external","src":"/_astro/acerca.cOGV178G.css"},{"type":"external","src":"/_astro/layout.dTLFyGBv.css"}],"routeData":{"route":"/layout","isIndex":false,"type":"page","pattern":"^\\/layout\\/?$","segments":[[{"content":"layout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/layout.astro","pathname":"/layout","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.va2BcLGF.js"}],"styles":[{"type":"external","src":"/_astro/acerca.cOGV178G.css"},{"type":"external","src":"/_astro/layout.dTLFyGBv.css"}],"routeData":{"route":"/nosotros","isIndex":false,"type":"page","pattern":"^\\/nosotros\\/?$","segments":[[{"content":"nosotros","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nosotros.astro","pathname":"/nosotros","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Bj5CHmKW.js"}],"styles":[{"type":"external","src":"/_astro/acerca.cOGV178G.css"},{"type":"external","src":"/_astro/layout.dTLFyGBv.css"}],"routeData":{"route":"/requisitos/[...id_carrera]","isIndex":false,"type":"page","pattern":"^\\/requisitos(?:\\/(.*?))?\\/?$","segments":[[{"content":"requisitos","dynamic":false,"spread":false}],[{"content":"...id_carrera","dynamic":true,"spread":true}]],"params":["...id_carrera"],"component":"src/pages/requisitos/[...id_carrera].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.va2BcLGF.js"}],"styles":[{"type":"external","src":"/_astro/acerca.cOGV178G.css"},{"type":"external","src":"/_astro/layout.dTLFyGBv.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/ariel216/Desarrollo/inac/src/pages/layout.astro",{"propagation":"none","containsHead":true}],["/home/ariel216/Desarrollo/inac/src/pages/acerca.astro",{"propagation":"none","containsHead":true}],["/home/ariel216/Desarrollo/inac/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/ariel216/Desarrollo/inac/src/pages/nosotros.astro",{"propagation":"none","containsHead":true}],["/home/ariel216/Desarrollo/inac/src/pages/requisitos/[...id_carrera].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/acerca.astro":"chunks/pages/acerca_B6vZApt2.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_ycTH_m7O.mjs","/src/pages/index.astro":"chunks/pages/index_Ds2hHpXp.mjs","/src/pages/layout.astro":"chunks/pages/layout_DA7qCYJ5.mjs","/src/pages/nosotros.astro":"chunks/pages/nosotros_BPu7oBlD.mjs","/src/pages/api/preinscripcion.ts":"chunks/pages/preinscripcion_Cd_iCPRp.mjs","\u0000@astrojs-manifest":"manifest_C2wE2Vrm.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_CYsms-Cu.mjs","\u0000@astro-page:node_modules/auth-astro/src/api/[...auth]@_@ts":"chunks/_.._DC3KO_9M.mjs","\u0000@astro-page:src/pages/acerca@_@astro":"chunks/acerca_vyCeI-xg.mjs","\u0000@astro-page:src/pages/api/preinscripcion@_@ts":"chunks/preinscripcion_BldakqEB.mjs","\u0000@astro-page:src/pages/layout@_@astro":"chunks/layout_B8cqMup1.mjs","\u0000@astro-page:src/pages/nosotros@_@astro":"chunks/nosotros_DwGu8eT0.mjs","\u0000@astro-page:src/pages/requisitos/[...id_carrera]@_@astro":"chunks/_.._omBs1dhk.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_maKzAHbp.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.va2BcLGF.js","/astro/hoisted.js?q=1":"_astro/hoisted.Bj5CHmKW.js","/home/ariel216/Desarrollo/inac/node_modules/auth-astro/client.ts":"_astro/client.BqElmF-z.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/hero.B7otvH1T.webp","/_astro/right.BvjW9blR.webp","/_astro/logo.ChQx05ID.svg","/_astro/acerca.cOGV178G.css","/_astro/layout.dTLFyGBv.css","/favicon.svg","/_astro/Navbar.astro_astro_type_script_index_0_lang.CwqsCMdk.js","/_astro/client.BqElmF-z.js","/_astro/hoisted.Bj5CHmKW.js","/_astro/hoisted.va2BcLGF.js"],"buildFormat":"directory"});

export { manifest };
