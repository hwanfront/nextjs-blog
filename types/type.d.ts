interface Post {
  id: string,
  content: string,
  frontMatter: FrontMatter
}

interface FrontMatter {
  categories: string[],
  date: string,
  description: string,
  slug: string,
  tags: string[],
  title: string
}