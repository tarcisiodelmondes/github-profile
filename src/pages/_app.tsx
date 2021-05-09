import Head from "next/head";
import { Header } from "../components/Header";
import {
  ProfileContext,
  ProfileContextProvider,
} from "../contexts/ProfileContext";
import "../styles/globals.scss";
import "../styles/variables.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Github Profile</title>
      </Head>
      <Header />
      <main>
        <ProfileContextProvider>
          <Component {...pageProps} />
        </ProfileContextProvider>
      </main>
    </>
  );
}

export default MyApp;
