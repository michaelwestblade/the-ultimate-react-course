import SearchPosts from './SearchPosts';
import Results from './Results.tsx';
import { useContext } from 'react';
import { PostContext, PostContextInterface } from '../contexts/PostContext.tsx';

export interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const { onClearPosts } = useContext<PostContextInterface>(PostContext);

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
