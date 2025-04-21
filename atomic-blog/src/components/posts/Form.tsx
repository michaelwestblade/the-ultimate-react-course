import { useState } from 'react';
import * as React from 'react';
import { PostInterface } from '../../../const.ts';

export interface FormAddPostProps {
  onAddPost: (post: PostInterface) => void;
}

export default function FormAddPost({ onAddPost }: FormAddPostProps) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = function (e: React.FormEvent) {
    e.preventDefault();
    if (!body || !title) return;
    onAddPost({ title, body });
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Post body"
      />
      <button>Add post</button>
    </form>
  );
}
