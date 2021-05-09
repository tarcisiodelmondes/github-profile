import Image from "next/image";
import styles from "./profileNotFound.module.scss";

export function ProfileNotFound() {
  return (
    <div className={styles.container}>
      <h1>User not found</h1>
      <p>Sorry, check if you typed the user correctly</p>

      <Image width={250} height={250} src="/detective.png" />
    </div>
  );
}
