import Head from "next/head";
import { Header } from "../components/Header";

import "../styles/globals.scss";
import "../styles/theme/theme.scss";
import { useEffect, useState } from "react";
import { ThemeContextProvider } from "../contexts/ThemeContext";

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
      <div className={`${theme}`}>
        <Head>
          <title>Github Profile</title>
        </Head>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </ThemeContextProvider>
  );
}

export default MyApp;
