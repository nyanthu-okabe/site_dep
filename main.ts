import { App } from "$fresh/server.ts";
import { Layout } from "./components/Layout.tsx";
import routes from "./fresh.gen.ts";

export default new App({ routes, layouts: { _default: Layout } });
