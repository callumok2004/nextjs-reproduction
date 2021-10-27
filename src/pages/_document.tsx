import Document, { Head, Html, Main, NextScript } from "next/document";

export default class Site extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="title" content="Ryft" />
          <meta name="description" content="Discord management, made simple." />
          <meta name="keywords" content="ryft, ryftbot, community, music" />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="theme-color" content="#0073a1" />
          <meta name="revisit-after" content="1 days" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="stylesheet" type="text/css" href="https://kit-pro.fontawesome.com/releases/v6.0.0-beta1/css/pro.min.css" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
