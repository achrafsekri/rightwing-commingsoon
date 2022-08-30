import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* <!-- Primary Meta Tags --> */}
        <title>Rightwing- a creative agency</title>
        <meta name="title" content="Rightwing- a creative agency" />
        <meta
          name="description"
          content="Rightwing is a Monastir, Tunisia based 
 creative agency that focuses on web development ,web design and 3d modeling. "
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rightwing.dev" />
        <meta property="og:title" content="Rightwing- a creative agency" />
        <meta
          property="og:description"
          content="Rightwing is a Monastir, Tunisia based 
 creative agency that focuses on web development ,web design and 3d modeling. "
        />
        <meta
          property="og:image"
          content="/logo.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rightwing.dev" />
        <meta property="twitter:title" content="Rightwing- a creative agency" />
        <meta
          property="twitter:description"
          content="Rightwing is a Monastir, Tunisia based 
 creative agency that focuses on web development ,web design and 3d modeling. "
        />
        <meta
          property="twitter:image"
          content="/logo.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
