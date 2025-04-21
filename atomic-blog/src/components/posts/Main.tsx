import Posts from './Posts.tsx';
import { PostInterface } from '../../../const.ts';
import FormAddPost from './Form.tsx';

export interface MainProps {
  posts: PostInterface[];
  onAddPost: (post: PostInterface) => void;
}

export default function Main({ posts, onAddPost }: MainProps) {
  return (
    <main>
      <FormAddPost onAddPost={onAddPost} />
      <Posts posts={posts} />
    </main>
  );
}
