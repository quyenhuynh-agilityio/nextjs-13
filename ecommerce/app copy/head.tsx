import React from "react";

import { metaData } from "@/constants/variables";
// import Script from "next/script";
// import { Partytown } from "@builder.io/partytown/react";

const Head: React.FC = () => {
  return (
    <>
      <title>{metaData.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={metaData.description} />
      <meta
        property="og:image"
        content="https://nextjs-13-ecommerce.vercel.app/api/og"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaData.title} />
      <meta property="og:description" content={metaData.description} />
      <meta property="og:site_name" content={metaData.title} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={metaData.title} />
      <meta property="twitter:description" content={metaData.description} />
      <link rel="icon" href="/image/logo.ico" type="image/x-icon" />
      {/* Warning: The worker strategy is not yet stable and does not yet work with the app directory. 
      Use with caution. 
      Link: https://beta.nextjs.org/docs/optimizing/scripts#offloading-scripts-to-a-web-worker-experimental
      */}

      {/* <Partytown debug={true} forward={["dataLayer.push"]} />
      <Script
        strategy="worker"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script
        id="google-analytics-script"
        type="text/partytown"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            window.gtag = function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                page_path: window.location.pathname,
            });
        `,
        }}
      /> */}
    </>
  );
};

export default Head;
