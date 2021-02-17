import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title> Mingeee - Learning </title>
      </Head>

      <main className={styles.wrapper}>
        <div className={styles.listContainer}>
          <div className={styles.link}>
            <Link href={'./bouncingball'}>
              Bouncing Ball
          </Link>
          </div>

          <div className={styles.link}>
            <Link href={'./pullandput'}>
              Pull and Put
          </Link>
          </div>
        </div>
      </main>
    </>
  )
}
