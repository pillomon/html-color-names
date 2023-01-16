import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="title" content="Browser Named Color" />
        <meta
          name="description"
          content="You can find 140 colors supported by the Modern Browser."
        />
        <meta
          name="keyword"
          content="browser color, color, hex, named color, web color, browser named color, hex color"
        />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
