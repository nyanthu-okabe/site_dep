import { PageProps } from "$fresh/server.ts";

export function Layout({ Component, state }: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />

        {/* SEO / Open Graph */}
        <meta
          name="keywords"
          content="Nyanthu, Software Developer, Game Development, BGFX, Godot, Tools, Open Source, Japan"
        />
        <meta
          property="og:title"
          content="Nyanthu | Software & Game Developer"
        />
        <meta
          property="og:description"
          content="Nyanthu is a software development group creating tools, games, and experimental technologies."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nyanthu.com/" />
        <meta
          property="og:image"
          content="https://www.nyanthu.com/favicon2.png"
        />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Nyanthu | Software & Game Developer"
        />
        <meta
          name="twitter:description"
          content="We create interactive software and games for everyone."
        />
        <meta
          name="twitter:image"
          content="https://www.nyanthu.com/favicon2.png"
        />
        <link rel="canonical" href="https://www.nyanthu.com/" />

        <link rel="icon" type="image/png" href="/favicon2.png?v=2" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon2.png?v=2"
        />
        <meta
          name="description"
          content="Nyanthu is a development group creating innovative software, games, and tools."
        />
        <title>Nyanthu | Software & Game Development Studio</title>

        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap&family=Pixelify+Sans&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css"
          rel="stylesheet"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-bash.min.js"></script>

        <link rel="stylesheet" href="/base.css" />
      </head>
      <body>
        <div class="container">
          <div class="header">
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossorigin
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
              rel="stylesheet"
            />
            <style>
              {`
                .logo {
                  font-family: "Fira Sans", sans-serif;
                  font-weight: 100;
                  font-style: normal;
                  vertical-align: top;
                }
                .logo_img {
                  padding: 10px;
                }
              `}
            </style>
            <a href="/" style={{ all: "unset", cursor: "pointer", display: "block" }}>
              <div
                class="logo"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  fontFamily: '"Fira Sans", sans-serif',
                  marginBottom: "10px",
                }}
              >
                <img
                  class="logo_img"
                  src="/n.png"
                  alt="Logo"
                  style={{
                    height: "50px",
                    width: "50px",
                    border: "0px",
                    objectFit: "contain",
                  }}
                />
                <div>
                  <h1
                    style={{
                      fontSize: "36px",
                      fontWeight: 500,
                      margin: 0,
                      lineHeight: 1.1,
                    }}
                  >
                    Nyanthu
                  </h1>
                  <p
                    style={{
                      margin: "0px 0 0 0",
                      fontWeight: 200,
                      fontSize: "16px",
                      color: "#555",
                    }}
                  >
                    High quality applications and games at low cost
                  </p>
                </div>
              </div>
            </a>
            <div
              class="header-buttons"
              role="navigation"
              aria-label="main navigation"
            >
              <a href="/">Home</a>
              <a href="/sites">Sites</a>
              <a href="/apps">Apps</a>
              <a href="/docs">Docs</a>
              <a href="/policy">Policy</a>
              {state.data?.user?.activate ? (
                <div class="account-nav">
                  <a href="#" style={{ borderColor: "#1d2088" }}>
                    {state.data.user.name}
                  </a>
                  <ul class="dropdown">
                    <li>
                      <a href="/profile">Profile</a>
                    </li>
                    <li>
                      <a href="/settings">Settings</a>
                    </li>
                    <li>
                      <a href="/my-threads">Dark</a>
                    </li>
                    <li class="divider">
                      <a href="/logout">Logout</a>
                    </li>
                  </ul>
                </div>
              ) : (
                <a href="/login" style={{ borderColor: "#1d2088" }}>
                  Login
                </a>
              )}
            </div>
          </div>

          <div id="content">
            <Component />
          </div>

          <footer>
            <p>© 2025 Nyanthu. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
