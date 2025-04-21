import { useContext } from 'react';
import { PostContext, PostContextInterface } from '../contexts/PostContext.ts';

export interface ResultsProps {}

export default function Results({}: ResultsProps) {
  const { posts } = useContext<PostContextInterface>(PostContext);
  return <p>🚀 {posts?.length} atomic posts found</p>;
}
