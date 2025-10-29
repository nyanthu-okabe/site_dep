import { Handlers, PageProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const { name } = ctx.params;
    const user = { activate: true, name: "John Doe" };

    try {
      const Component = (await import(`../islands/${name}.tsx`)).default;
      return ctx.render({ user, Component });
    } catch (error) {
      return ctx.renderNotFound({ user });
    }
  },
};

export default function DynamicPage({ data }: PageProps) {
  const { user, Component } = data;

  if (!Component) {
    return (
      <div class="container">
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <a href="/">Go back to Home</a>
      </div>
    );
  }

  return <Component />;
}
