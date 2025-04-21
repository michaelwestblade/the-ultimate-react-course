import { usePosts } from '../contexts/PostContext.tsx';

export interface ResultsProps {}

export default function Results({}: ResultsProps) {
  const { posts } = usePosts();
  return <p>🚀 {posts?.length} atomic posts found</p>;
}
