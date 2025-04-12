import React, {useState} from 'react';
import {Logo} from "./Components/Logo/Logo";
import {Form} from "./Components/Form/Form";
import {PackingList} from "./Components/PackingList/PackingList";
import {Stats} from "./Components/Stats/Stats";
import {Item, ItemProps} from "./Components/Item/Item";

function App() {
    const [items, setItems] = useState<Item[]>([]);

    const handleAddItem = (item: Item) => {
        setItems([...items, item]);
    }

    const handleDeleteItem = (id: number) => {
        setItems(items.filter(item => item.id !== id));
    }

    return (
        <div className="App">
            <Logo/>
            <Form onAddItems={handleAddItem}/>
            <PackingList items={items} onDeleteItem={handleDeleteItem}/>
            <Stats/>
        </div>
    );
}

export default App;
