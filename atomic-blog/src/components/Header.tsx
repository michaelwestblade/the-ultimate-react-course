import SearchPosts from './SearchPosts';
import Results from './Results.tsx';
import { usePosts } from '../contexts/PostContext.tsx';

export interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const { onClearPosts } = usePosts();

  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}
