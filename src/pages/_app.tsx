import Head from "next/head";
import { Header } from "../components/Header";
import { ProfileContextProvider } from "../contexts/ProfileContext";

import styles from "./app.module.scss";

import "../styles/globals.scss";
import "../styles/variables.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ProfileContextProvider>
      <Head>
        <title>Github Profile</title>
      </Head>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </ProfileContextProvider>
  );
}

export default MyApp;
