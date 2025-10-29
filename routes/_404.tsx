import { Head } from "$fresh/runtime.ts";
import { UnknownPageProps } from "$fresh/server.ts";

export default function NotFoundPage({ url }: UnknownPageProps) {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <h1 class="text-4xl font-bold">404 - Page not found</h1>
          <p class="my-4">
            The page you were trying to visit (<strong>{url.pathname}</strong>)
            does not exist.
          </p>
          <button onClick="location.href = '/'">Go back home</button>
        </div>
      </div>
    </>
  );
}
