import { App } from "fresh";
import { Layout } from "./routes/_app.tsx";

export const app = new App();

app.layout(Layout);

app.fsRoutes();