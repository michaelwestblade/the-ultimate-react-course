export interface ResultsProps {
  posts: {}[];
}

export default function Results({ posts }: ResultsProps) {
  return <p>🚀 {posts.length} atomic posts found</p>;
}
