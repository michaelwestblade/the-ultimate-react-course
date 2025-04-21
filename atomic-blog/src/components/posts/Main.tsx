import Posts from './Posts.tsx';
import FormAddPost from './Form.tsx';
import { useContext } from 'react';
import {
  PostContext,
  PostContextInterface,
} from '../../contexts/PostContext.tsx';

export interface MainProps {}

export default function Main({}: MainProps) {
  const { onAddPost, posts } = useContext<PostContextInterface>(PostContext);

  return (
    onAddPost &&
    posts && (
      <main>
        <FormAddPost onAddPost={onAddPost} />
        <Posts posts={posts} />
      </main>
    )
  );
}
