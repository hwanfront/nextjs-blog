import { getPostPaths } from "@/lib/post";
import { NextPage } from "next";
import Link from "next/link";

const Post: NextPage<{id: string}> = ({ id }) => {
  return (
    <div>
      <Link href='/'>main</Link>
      <div>{id}</div>
    </div>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: getPostPaths(),
    fallback: false
  }
}

export const getStaticProps = async ({ params }: {params: { id: string; }}) => {
  return { props: { ...params } };
}

export default Post;