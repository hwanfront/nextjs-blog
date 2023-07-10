import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const POST_DIRECTORY = path.join(process.cwd(), '__posts');

export const getPostPaths = () => {
  const files = fs.readdirSync(POST_DIRECTORY);
  const paths = files.map((file) => ({
    params: { id: file.replace(/\.md$/, '') }
  }))

  return paths;
}

export const getPosts = () => {
  const files = fs.readdirSync(POST_DIRECTORY);
  const posts = files.map((file) => {
    const filePath = path.join(POST_DIRECTORY, file);
    const post = fs.readFileSync(filePath, 'utf-8');
    const { content, data: frontMatter } = matter(post);
    
    return { id: file.replace(/\.md$/, ''), frontMatter, content };
  })
  return posts;
}

export const getPostById = async (id: string) => {
  const filePath = path.join(POST_DIRECTORY, `${id}.md`);
  const post = fs.readFileSync(filePath, 'utf-8');
  const { content, data: frontMatter } = matter(post);
  return { id, content, frontMatter };
}