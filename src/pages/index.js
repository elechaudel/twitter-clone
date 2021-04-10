import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import Post from '../components/Post';
import Bio from '../components/Bio';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Bio
          headshot="https://pbs.twimg.com/profile_images/970679624198971393/U9q4SH11_400x400.jpg"
          name="Colby Fayock"
          tagline="Helping others to learn by doing!"
          role="Designer Advocate @ Applitools"
        />

        <ul className={styles.posts}>
          <li>
            <Post
              content="Hey, I'm a new post!"
              date="3/2/2021"
            />
          </li>
          <li>
            <Post
              content="I'm working on Figma." 
              date="/26/2021"
            />
          </li>
          <li>
            <Post
              content="I'm working on Figma." 
              date="/26/2021"
            />
          </li>
          <li>
            <Post
              content="I'm working on Figma." 
              date="/26/2021"
            />
          </li>
        </ul>

        <form>
          <textarea className={styles.formContent}></textarea>
          <button className={styles.formButton}>Add new tweet</button>
        </form>
      </main>

    </div>
  )
}
