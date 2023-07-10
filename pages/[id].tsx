import { getPostById, getPostPaths, getPosts } from "@/lib/post";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";

const Post: NextPage<{id: string}> = ({ id }) => {
  return (
    <div>
      <Link href='/'>&lt;- to main</Link>
      <div>{id}</div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getPostPaths(),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  // const data = getPostById(context.params?.id);
  console.log(getPosts());
  return { props: { ...context.params } };
}

export default Post;