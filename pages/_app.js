import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from '../components/layouts/Layout'

function MyApp ({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
      <Head>
        <meta name='viewport' content='viewport-fit=cover' />
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='' />
        <meta name='author' content='' />
      </Head>

      {router.pathname.toLocaleLowerCase() === '/login' ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  )
}

export default MyApp
