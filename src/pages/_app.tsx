import Head from "next/head";
import { Header } from "../components/Header";

import "../styles/globals.scss";
import "../styles/theme/theme.scss";
import { useEffect, useState } from "react";
import { ThemeContextProvider } from "../contexts/ThemeContext";
import { useRouter } from "next/router";
import { Loading } from "../components/Loading";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(localStorage.getItem("github-profile:theme") || "light");
  }, []);

  function toggleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <ThemeContextProvider theme={theme}>
      <div className={`${theme}`}>
        <Head>
          <title>Github Profile</title>
        </Head>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <main>
          <Loading isLoading={loading} />
          <Component {...pageProps} />
        </main>
      </div>
    </ThemeContextProvider>
  );
}

export default MyApp;
