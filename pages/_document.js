/* eslint-disable @next/next/no-css-tags */
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render () {
    return (
      <Html
        style={{
          height: 'auto',
          minHeight: '100%'
        }}
      >
        <Head>
          <link rel='icon' href='/images/favicon.ico' />
          <link rel='stylesheet' href='/css/vendors_css.css' />
          <link rel='stylesheet' href='/css/style.css' />
          <link rel='stylesheet' href='/css/skin_color.css' />
        </Head>
        <body className='hold-transition light-skin sidebar-mini theme-primary' >
          <Main />
          <NextScript />

          <script src='/js/vendors.min.js' async></script>
          <script
            src='/assets/icons/feather-icons/feather.min.js'
            async
          ></script>
          <script
            src='/assets/vendor_components/apexcharts-bundle/dist/apexcharts.js'
            async
          ></script>
          <script
            src='/assets/vendor_components/progressbar.js-master/dist/progressbar.js'
            async
          ></script>
          <script
            src='/assets/vendor_components/raphael/raphael.min.js'
            async
          ></script>
          <script
            src='/assets/vendor_components/morris.js/morris.min.js'
            async
          ></script>
          <script src='/assets/vendor_components/d3/d3.min.js' async></script>
          <script
            src='/assets/vendor_components/d3/d3_tooltip.js'
            async
          ></script>

          <script src='/js/template.js' async></script>
          {/* <script src='/js/pages/dashboard.js' async></script> */}
          <script src='/js/demo.js' async></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
