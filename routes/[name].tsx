import { Handlers, PageProps } from "$fresh/server.ts";
import Apps from "../islands/apps.tsx";
import Docs from "../islands/docs.tsx";
import Donate from "../islands/donate.tsx";
import Policy from "../islands/policy.tsx";
import Sites from "../islands/sites.tsx";

const pages: Record<string, any> = {
  apps: Apps,
  docs: Docs,
  donate: Donate,
  policy: Policy,
  sites: Sites,
};

export const handler: Handlers = {
  GET(_req, ctx) {
    const { name } = ctx.params;
    const Component = pages[name];
    const user = { activate: true, name: "John Doe" };

    if (!Component) {
      return ctx.renderNotFound();
    }

    return ctx.render({ user, Component });
  },
};

export default function DynamicPage({ data }: PageProps) {
  const { Component } = data;
  return <Component />;
}