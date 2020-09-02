import Head from 'next/head'
import AboutPage from '../components/screens/about'


export default function About() {
  return (
    <div >
      <Head>
        <title>Better Life Savings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AboutPage />
    </div>
  )
}
