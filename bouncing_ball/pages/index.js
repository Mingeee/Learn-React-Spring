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
        <div className={styles.link}>
          <Link href={'./bouncingball'}>
            Bouncing Ball
          </Link>
        </div>
      </main>
    </>
  )
}
