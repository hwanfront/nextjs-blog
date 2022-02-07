import { Html, Head, Main, NextScript } from "next/document";
import { TypographyStyle } from "react-typography";
import typography from "../utils/typography";

const MyDocument = () => (
  <Html>
    <Head>
      <TypographyStyle typography={typography} />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
