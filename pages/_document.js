/* eslint-disable @next/next/no-css-tags */
import Document, { Html, Head, Main, NextScript } from 'next/document'


class MyDocument extends Document {
  render () {
    return (
      <Html>
        <Head>
          <link rel='icon' href='/images/favicon.ico' />
          <link rel='stylesheet' href='/css/style.css' />
        </Head>
        <body className=''>
          <Main />
          <NextScript />
          <script src='/js/script.js' defer></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
