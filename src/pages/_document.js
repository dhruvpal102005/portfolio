import { schemaMarkup } from "@/lib/schema-markup";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
        <script defer src="https://analytics.dwiwijaya.com/script.js" data-website-id="7e71a6f6-f863-400e-806f-1af37e845ad1"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
