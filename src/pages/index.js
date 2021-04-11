import { useState, useEffect } from 'react';
import Head from 'next/head'

import { useAuth } from '../hooks/useAuth';
import  { getAllPosts, createPost } from '../lib/posts';

import Post from '../components/Post';
import Bio from '../components/Bio';
import PostForm from '../components/PostForm';

import styles from '../styles/Home.module.scss'

export default function Home( { posts: defaultPosts } ) {

const [posts, updatePosts] = useState(defaultPosts);

const postsSorted = posts.sort(function(a,b){
  return new Date(b.date) - new Date(a.date);
});

const { user, logIn, logOut } = useAuth();

async function handleOnSubmit(data, e) {
  e.preventDefault();

  await createPost(data);

  // console.log('response', response)

  const posts = await getAllPosts();
  updatePosts(posts);
}

// console.log('user', user);
// console.log('post', posts);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      { !user && (
        <p>
          <button onClick={logIn}>Log in</button>
        </p>
      )}

      { user && (
        <p>
          <button onClick={logOut}>Log out</button>
        </p>
      )}

      <main className={styles.main}>
        <Bio
          headshot="https://pbs.twimg.com/profile_images/970679624198971393/U9q4SH11_400x400.jpg"
          name="Colby Fayock"
          tagline="Helping others to learn by doing!"
          role="Designer Advocate @ Applitools"
        />

        <ul className={styles.posts}>
          {postsSorted.map(post => {
            const { content, id, date } = post;
            return (
              <li key={id}>
                <Post
                  content={content}
                  date={new Intl.DateTimeFormat('en-US', {
                    dateStyle: 'short',
                    timeStyle: 'short'
                  }).format(new Date(date))}
                />
              </li>
          )
          })}
        </ul>

        { user && (
          <PostForm onSubmit={handleOnSubmit} />
        )}
      </main>

    </div>
  )
}

export async function getServerSideProps() {
  const posts = await getAllPosts();

  return {
    props: {
      posts
    }
  }
}
