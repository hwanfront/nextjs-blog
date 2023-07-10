import { getPosts } from '@/lib/post'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

interface HomeProps {
  posts: Post[]
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Home | asdfg32145 blog</title>
      </Head>
      <main>
        <section style={{display: 'flex', flexDirection: 'column'}}>
          {posts.map((post) => (
            <article key={post.id}>
              <Link href={`/${post.id}`} passHref>
                <a role="article">
                  <h1>{post.frontMatter.title}</h1>
                </a>
              </Link>
              <p>{post.frontMatter.description}</p>
              <div style={{display: 'flex'}}>
                <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0, gap: '10px' }}>
                  {post.frontMatter.categories.map(e => <li key={e}>{e}</li>)}
                </ul>
                <span>{post.frontMatter.date}</span>
              </div>
                <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0, gap: '10px' }}>
                  {post.frontMatter.tags.map(e => <li key={e}># {e}</li>)}
                </ul>
            </article>
          ))}
        </section>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = getPosts();
  return { props: { posts } };
}

export default Home
