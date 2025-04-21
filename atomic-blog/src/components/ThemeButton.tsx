import { useContext } from 'react';
import { PostContext, PostContextInterface } from '../contexts/PostContext.tsx';

export default function ThemeButton() {
  const { isFakeDark, setIsFakeDark } =
    useContext<PostContextInterface>(PostContext);

  const handleClick = () => {
    if (setIsFakeDark && typeof isFakeDark !== 'undefined') {
      setIsFakeDark((isFakeDark: boolean) => !isFakeDark);
    }
  };
  return (
    <button onClick={() => handleClick} className="btn-fake-dark-mode">
      {isFakeDark ? '☀️' : '🌙'}
    </button>
  );
}
