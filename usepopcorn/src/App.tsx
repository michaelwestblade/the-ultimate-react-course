import React from 'react';
import NavBar from "./Components/NavBar/NavBar";
import ListBox from "./Components/MovieList/ListBox";
import WatchedBox from "./Components/MovieList/WatchedBox";

function App() {
  return (
    <div className="App">
        <NavBar movies={[]}/>
        <main className="main">
            <ListBox movies={[]}/>
            <WatchedBox movies={[]}/>
        </main>
    </div>
  );
}

export default App;
