import { getPostById, getPostPaths } from "@/lib/post";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

interface PostProps {
  post: Post;
}

const Post: NextPage<PostProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{`${post.frontMatter.slug} | asdfg32145 blog`}</title>
      </Head>
      <nav>
        <Link href='/'>&lt;- to main</Link>
      </nav>
      <main>
        <article role="article">
          <header style={{display: 'flex', flexDirection: 'column'}}>
            <h1>{post.frontMatter.title}</h1>
            <span>{post.frontMatter.date}</span>
            <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0, gap: '10px' }}>
              {post.frontMatter.categories.map(e => <li key={e}>{e}</li>)}
            </ul>
          </header>

          <section>
            <div dangerouslySetInnerHTML={{__html: post.content}}></div>
          </section>

          <section>
            <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0, gap: '10px' }}>
              {post.frontMatter.tags.map(e => <li key={e}># {e}</li>)}
            </ul>
          </section>
        </article>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getPostPaths();
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params!;
  const post = await getPostById(id?.toString() || '');
  return { props: { post } };
}

export default Post;