import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from "remark-rehype";
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify'

export const convertMarkdownToHTML = async (md: string) => {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(md);
  return result.toString();
}