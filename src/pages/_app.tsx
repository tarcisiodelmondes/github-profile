import Head from "next/head";
import { Header } from "../components/Header";
import { ProfileContextProvider } from "../contexts/ProfileContext";

import "../styles/globals.scss";
import "../styles/theme/theme.scss";
import { useEffect, useState } from "react";
import { ThemeContextProvider } from "../contexts/ThemeContext";
import { LoadingContextProvider } from "../contexts/LoadingContext";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(localStorage.getItem("github-profile:theme") || "light");
  }, []);

  function toggleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <ThemeContextProvider theme={theme}>
      <LoadingContextProvider>
      <div className={`${theme}`}>
        <ProfileContextProvider>
          <Head>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
            />

            <title>Github Profile</title>
          </Head>
          <Header toggleTheme={toggleTheme} theme={theme} />
          <main>
            <Component {...pageProps} />
          </main>
        </ProfileContextProvider>
      </div>
      </LoadingContextProvider>
    </ThemeContextProvider>
  );
}

export default MyApp;
