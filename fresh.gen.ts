import { defineApp } from "$fresh/server.ts";
import { Layout } from "./components/Layout.tsx";
import index from "./routes/index.tsx";
import name from "./routes/[name].tsx";

export default defineApp({
  routes: {
    "./routes/index.tsx": index,
    "./routes/[name].tsx": name,
  },
  layouts: {
    _default: Layout,
  },
});
