import { useContext, useEffect } from 'react';
import { PostContext, PostContextInterface } from '../contexts/PostContext.tsx';

export default function ThemeButton() {
  const { isFakeDark, setIsFakeDark } =
    useContext<PostContextInterface>(PostContext);

  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  useEffect(
    function () {
      document.body.classList.toggle('fake-dark-mode');
    },
    [isFakeDark]
  );

  const handleClick = () => {
    if (setIsFakeDark && typeof isFakeDark === 'boolean') {
      setIsFakeDark((isFakeDark: boolean) => !isFakeDark);
    }
  };
  return (
    <button onClick={handleClick} className="btn-fake-dark-mode">
      {isFakeDark ? '☀️' : '🌙'}
    </button>
  );
}
