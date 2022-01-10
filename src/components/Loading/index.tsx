import { AiOutlineLoading } from "react-icons/ai";
import styles from "./loading.module.scss";

export function Loading({ isLoading }) {
  if (!isLoading) return <></>;

  return (
    <div data-testid="loading" className={styles.container}>
      <div className={styles.container__icon}>
        <AiOutlineLoading className={styles.icon} fontSize={60} color="blue" />
      </div>
    </div>
  );
}
