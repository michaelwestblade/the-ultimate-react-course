import SearchPosts from './SearchPosts';
import Results from './Results.tsx';
import { useContext } from 'react';
import { PostContext, PostContextInterface } from '../contexts/PostContext.ts';

export interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const { posts, setSearchQuery, searchQuery, onClearPosts } =
    useContext<PostContextInterface>(PostContext);

  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results posts={posts || []} />
        {searchQuery && setSearchQuery && (
          <SearchPosts
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        )}
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}
