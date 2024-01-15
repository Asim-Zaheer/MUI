import Image from "next/image";
import MyButton from "./component/Material";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <MyButton />
    </main>
  );
}
