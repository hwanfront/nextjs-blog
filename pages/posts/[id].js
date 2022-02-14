import Head from "next/head";
import Layout from "../../components/layout";
import Date from "../../components/date";
import Markdown from "../../components/Markdown/Markdown";
import { getAllPostIds, getPostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.scss";

// fetch all possible blog posts
export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

// fetch a specific post given an ID
export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

const Post = ({ postData }) => (
  <Layout>
    <Head>
      <title>{postData.title}</title>
    </Head>
    <article>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>
        <Date date={postData.date} />
      </div>
      <Markdown>{postData.content}</Markdown>
    </article>
  </Layout>
);

export default Post;
