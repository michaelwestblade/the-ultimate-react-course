import {Item} from "../Item/Item";
import {useState} from "react";

export interface PackingListProps {
    items: Item[];
    onDeleteItem: (id: number) => void;
    onItemPackedChange: (id: number, packed: boolean) => void;
}

export const PackingList = ({items, onDeleteItem, onItemPackedChange}: PackingListProps) => {
    const [sortBy, setSortBy] = useState('input');
    let sortedItems;

    switch (sortBy) {
        case 'input':
            sortedItems = items;
            break;
        case 'description':
            sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
            break;
        case 'packed':
            sortedItems = items.slice().sort((a, b) => Number(b.packed) - Number(a.packed));
            break

    }

    return <div className="list">
        <ul>
            { sortedItems && sortedItems.length && sortedItems.map(item => <Item key={item.id} id={item.id} description={item.description} quantity={item.quantity} packed={item.packed} onDeleteItem={onDeleteItem} onItemPackedChange={onItemPackedChange}/>)}
        </ul>
        <div className="actions">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="input">Sort by input order</option>
                <option value="description">Sort by description</option>
                <option value="packed">Sort by packed status</option>
            </select>
        </div>
    </div>
}