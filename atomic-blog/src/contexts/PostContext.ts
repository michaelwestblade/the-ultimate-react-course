import { createContext } from 'react';
import { PostInterface } from '../../const.ts';

export interface PostContextInterface {
  posts?: PostInterface[];
  onAddPost?: (post: PostInterface) => void;
  onClearPosts?: () => void;
  searchQuery?: string;
  setSearchQuery?: (query: string) => void;
}

export const PostContext = createContext<PostContextInterface>({});
