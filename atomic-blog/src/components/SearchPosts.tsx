export interface SearchPostsProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function SearchPosts({
  searchQuery,
  setSearchQuery,
}: SearchPostsProps) {
  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
}
