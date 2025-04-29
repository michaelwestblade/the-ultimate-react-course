import { usePosts } from '../contexts/PostContext.tsx';

export interface SearchPostsProps {}

export default function SearchPosts({}: SearchPostsProps) {
  const { searchQuery, setSearchQuery } = usePosts();
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
