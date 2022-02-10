import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.scss";
import { getSortedPostsData } from "../lib/posts";
import Button from "../components/Button";
import TodoList from "../components/TodoList";

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

const Todo = () => (
  <Layout>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Blog</h2>
      <Button>글쓰기</Button>
      <TodoList />
    </section>
  </Layout>
);

export default Todo;
