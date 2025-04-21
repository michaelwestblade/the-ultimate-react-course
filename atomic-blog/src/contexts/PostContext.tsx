import { createContext, useContext, useEffect, useState } from 'react';
import { createRandomPost, PostInterface } from '../../const.ts';

export interface PostContextInterface {
  posts?: PostInterface[];
  onAddPost?: (post: PostInterface) => void;
  onClearPosts?: () => void;
  searchQuery?: string;
  setSearchQuery?: (query: string) => void;
  isFakeDark?: boolean;
  setIsFakeDark?: (value: (isFakeDark: boolean) => boolean) => void;
  searchedPosts?: PostInterface[];
}

export const PostContext = createContext<PostContextInterface>({});

export function PostProvider({ children }: { children: React.ReactNode }) {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [isFakeDark, setIsFakeDark] = useState(false);

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post: PostInterface) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  useEffect(
    function () {
      document.documentElement.classList.toggle('fake-dark-mode');
    },
    [isFakeDark]
  );

  return (
    <PostContext.Provider
      value={{
        posts,
        onAddPost: handleAddPost,
        onClearPosts: handleClearPosts,
        searchQuery,
        setSearchQuery,
        isFakeDark,
        setIsFakeDark,
        searchedPosts,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export function usePosts() {
  const context = useContext(PostContext);
  return context;
}
