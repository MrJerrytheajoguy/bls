import Head from "next/head";
import SignInModal from "../components/SignIn";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Better Life Savings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SignInModal />
    </div>
  );
}
