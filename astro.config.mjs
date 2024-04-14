import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import tailwind from "@astrojs/tailwind";

import auth from "auth-astro";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), auth()],
  output: 'server',
  adapter: netlify(),
});