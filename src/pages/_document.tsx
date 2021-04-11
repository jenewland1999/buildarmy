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
          <link rel="dns-prefetch" href="https://fonts.gstatic.com/" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;1,400&display=swap"
            media="print"
            // @ts-ignore
            onLoad="this.media='all'"
          />
          <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;1,400&display=swap"
            />
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
