"use client";

import Script from "next/script";

export default function GoogleAnalytics() {
  return (
    <>
      {/* Replace G-6KMG2VFGHC with your GA Measurement ID */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-6KMG2VFGHC"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6KMG2VFGHC');
        `}
      </Script>
    </>
  );
}
