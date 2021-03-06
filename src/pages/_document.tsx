import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en" prefix="og: https://ogp.me/ns#">
        <Head>
          {/* Fastest Google Fonts https://csswizardry.com/2020/05/the-fastest-google-fonts/ */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          />
          {/* https://github.com/vercel/next.js/issues/12984 ¯\_(ツ)_/¯ */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
                </style>
                  <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;1,400&display=swap"
                    media="print"
                    onload="this.media = 'all';"
                  />
                <style>
              `,
            }}
          ></style>
          <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;1,400&display=swap"
            />
          </noscript>
        </Head>
        <body className="font-body text-secondary-darkest">
          <Main />
          {/* Here we will mount our modal portal */}
          <div id="portals" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
