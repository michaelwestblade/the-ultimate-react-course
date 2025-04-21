import List from './List.tsx';
import { PostInterface } from '../../../const.ts';

export interface PostsProps {
  posts: PostInterface[];
}

export default function Posts({ posts }: PostsProps) {
  return (
    <section>
      <List posts={posts} />
    </section>
  );
}
