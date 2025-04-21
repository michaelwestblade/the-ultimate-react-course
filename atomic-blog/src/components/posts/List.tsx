import { PostInterface } from '../../../const.ts';

export interface ListProps {
  posts: PostInterface[];
}

export default function List({ posts }: ListProps) {
  return (
    <ul>
      {posts.map((post, i) => (
        <li key={i}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}
