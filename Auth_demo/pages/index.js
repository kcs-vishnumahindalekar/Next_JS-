import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useSession } from 'next-auth/client'
import {useRouter} from 'next/router'

export default function Home() {
  const [session]=useSession()
  console.log("from index",session)
  const router = useRouter()
  return (
    <div className={styles.container}>
      <Head>
        <title>Auth Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {session ? `${session.user.name}`:""}Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <button onClick={()=>router.push('/api/test-session')}>Check User Authenticated or not</button>
      </main>

    </div>
  )
}