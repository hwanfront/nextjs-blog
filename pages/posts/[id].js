import Head from "next/head";
import Layout from "../../components/layout";
import Date from "../../components/date";
import ReactMarkdown from "react-markdown";
import { getAllPostIds, getPostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";

// fetch all possible blog posts
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

// fetch a specific post given an ID
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date date={postData.date} />
        </div>
        <ReactMarkdown>{postData.content}</ReactMarkdown>
      </article>
    </Layout>
  );
}
