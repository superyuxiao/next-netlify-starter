import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="My New Pages !" />
        <p className="description">
          Hello, YuXiao, again! <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
