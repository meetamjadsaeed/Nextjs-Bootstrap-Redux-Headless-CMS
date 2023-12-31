import { Html, Head, Main, NextScript } from 'next/document'
// import Document, { Html, Head, Main, NextScript } from 'next/document'

// const YOUR_CONTAINER_ID = "G-PJRCF63125, GT-KFLK4WB";
export default function Document() {
  return (
    <Html lang="en">
      {/* <Head> */}
      {/* <script
    dangerouslySetInnerHTML={{
      __html: `
        <!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${YOUR_CONTAINER_ID}');</script>
        <!-- End Google Tag Manager -->
      `
    }}
  /> */}
      <Head />
      <body>
      {/* <noscript>
    <iframe
      src={`https://www.googletagmanager.com/ns.html?id=${YOUR_CONTAINER_ID}`}
      height="0"
      width="0"
      style={{ display: 'none', visibility: 'hidden' }}
    ></iframe>
  </noscript> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
