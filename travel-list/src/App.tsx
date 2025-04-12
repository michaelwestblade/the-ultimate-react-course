import React, {useState} from 'react';
import {Logo} from "./Components/Logo/Logo";
import {Form} from "./Components/Form/Form";
import {PackingList} from "./Components/PackingList/PackingList";
import {Stats} from "./Components/Stats/Stats";
import {ItemProps} from "./Components/Item/Item";

function App() {
    const [items, setItems] = useState<ItemProps[]>([]);

    const handleAddItem = (item: ItemProps) => {
        setItems([...items, item]);
    }

  return (
    <div className="App">
        <Logo/>
        <Form onAddItems={handleAddItem}/>
        <PackingList items={items}/>
        <Stats/>
    </div>
  );
}

export default App;
