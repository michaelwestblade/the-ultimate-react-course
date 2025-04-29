import Posts from './Posts.tsx';
import FormAddPost from './Form.tsx';
import { usePosts } from '../../contexts/PostContext.tsx';

export interface MainProps {}

export default function Main({}: MainProps) {
  const { onAddPost, searchedPosts } = usePosts();

  return (
    onAddPost &&
    searchedPosts && (
      <main>
        <FormAddPost onAddPost={onAddPost} />
        <Posts posts={searchedPosts} />
      </main>
    )
  );
}
