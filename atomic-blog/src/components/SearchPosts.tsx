import { useContext } from 'react';
import { PostContext, PostContextInterface } from '../contexts/PostContext.ts';

export interface SearchPostsProps {}

export default function SearchPosts({}: SearchPostsProps) {
  const { setSearchQuery, searchQuery } =
    useContext<PostContextInterface>(PostContext);
  return (
    <input
      value={searchQuery}
      onChange={(e) =>
        setSearchQuery ? setSearchQuery(e.target.value) : () => {}
      }
      placeholder="Search posts..."
    />
  );
}
