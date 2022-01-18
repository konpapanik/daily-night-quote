import Head from 'next/head'
import styles from '../styles/Home.module.css'
import DailyQuote from '../components/DailyQuote'
import NightQuote from '../components/NightQuote'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Simplicity is beauty</title>
        <meta name="description" content="2 quotes a day" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Simplicity is beauty
        </h1>

        <p className={styles.description}>
          
          <code className={styles.code}>A simple way to understand how to get data from an API with useEffect React hook in 2 ways. First with axios and then with fetch packages.  </code>
        </p>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h2>Daily Quote &rarr;</h2>
            <p><DailyQuote /></p>
          </a>

          <a href="" className={styles.cardnight}>
            <h2>Night Quote &rarr;</h2>
            <p><NightQuote /></p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
