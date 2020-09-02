import Head from 'next/head'
import EditProfile from '../../components/screens/edit-profile'


export default function Contact() {
  return (
    <div >
      <Head>
        <title>Better Life Savings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <EditProfile />
    </div>
  )
}
