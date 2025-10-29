import { defineManifest } from "$fresh/core/mod.ts";
import * as $name from "./routes/[name].tsx";
import * as $index from "./routes/index.tsx";
import * as $app from "./routes/_app.tsx";
import * as apps from "./islands/apps.tsx";
import * as docs from "./islands/docs.tsx";
import * as donate from "./islands/donate.tsx";
import * as policy from "./islands/policy.tsx";
import * as sites from "./islands/sites.tsx";

export default defineManifest({
  routes: {
    "./routes/[name].tsx": $name,
    "./routes/index.tsx": $index,
    "./routes/_app.tsx": $app,
  },
  islands: {
    "./islands/apps.tsx": apps,
    "./islands/docs.tsx": docs,
    "./islands/donate.tsx": donate,
    "./islands/policy.tsx": policy,
    "./islands/sites.tsx": sites,
  },
  baseUrl: import.meta.url,
});