import { usePosts } from '../contexts/PostContext.tsx';

export interface ResultsProps {}

export default function Results({}: ResultsProps) {
  const { searchedPosts } = usePosts();
  return <p>🚀 {searchedPosts?.length} atomic posts found</p>;
}
