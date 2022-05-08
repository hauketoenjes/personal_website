import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends NextDocument {
  render() {
    return (
      <Html lang="de">
        <Head />
        <body className="bg-neutral-900 text-neutral-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
