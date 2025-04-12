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

    const handleItemPackedChange = (id: number, packed: boolean) => {
        setItems(items.map(item => item.id === id ? {...item, packed} : item));
    }

    return (
        <div className="App">
            <Logo/>
            <Form onAddItems={handleAddItem}/>
            <PackingList items={items} onDeleteItem={handleDeleteItem} onItemPackedChange={handleItemPackedChange}/>
            <Stats items={items}/>
        </div>
    );
}

export default App;
