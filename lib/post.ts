import fs from 'fs';
import path from 'path';

const POST_DIRECTORY = path.join(process.cwd(), '__posts');

export const getPostPaths = () => {
  const files = fs.readdirSync(POST_DIRECTORY);
  const paths = files.map((post) => ({
    params: { id: post.replace(/\.md$/, '') }
  }))

  return paths;
}

export const getPosts = async () => {
  const files = fs.readdirSync(POST_DIRECTORY);
  const posts = files.map((file) => {
    console.log(posts);
  })
  
}

export const getPostById = async (id: string) => {

}