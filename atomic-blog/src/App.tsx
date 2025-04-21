import Header from './components/Header.tsx';
import Main from './components/posts/Main.tsx';
import Archive from './components/posts/Archive.tsx';
import Footer from './components/Footer.tsx';
import { PostProvider } from './contexts/PostContext.tsx';
import ThemeButton from './components/ThemeButton.tsx';

function App() {
  return (
    <PostProvider>
      <section>
        <ThemeButton />

        <Header />
        <Main />
        <Archive />
        <Footer />
      </section>
    </PostProvider>
  );
}

export default App;
