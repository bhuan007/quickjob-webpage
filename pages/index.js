import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quick Job</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Quick Job</h1>

        <p className={styles.description}>
          <h2>Authors</h2>
          <code className={styles.code}>
            Bryan Huang
            <br />
            Hanbing Wang
            <br />
            Tae Hyun Lee
          </code>
          This project was a part of a course at UCI.
        </p>
      </main>
    </div>
  );
}
