import Head from 'next/head'
import ContactPage from '../components/screens/contact'


export default function Contact() {
  return (
    <div >
      <Head>
        <title>Better Life Savings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContactPage />
    </div>
  )
}
