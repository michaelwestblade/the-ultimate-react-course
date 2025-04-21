import SearchPosts from './SearchPosts';
import Results from './Results.tsx';

export interface HeaderProps {
  posts: {}[];
  onClearPosts: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Header({
  posts,
  onClearPosts,
  searchQuery,
  setSearchQuery,
}: HeaderProps) {
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results posts={posts} />
        <SearchPosts
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}
