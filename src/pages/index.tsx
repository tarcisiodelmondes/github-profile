import Image from "next/image";
import { Search } from "../components/Search";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <main className={styles.homepage}>
      <Image
        width={250}
        height={250}
        src="/github.png"
        alt="Image of github"
        objectFit="cover"
        className={styles.img}
      />
      <div className={styles.containerSearch}>
        <Search />
      </div>
    </main>
  );
}
