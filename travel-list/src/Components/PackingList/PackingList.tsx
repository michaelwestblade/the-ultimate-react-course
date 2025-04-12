import {Item} from "../Item/Item";

export interface PackingListProps {
    items: Item[];
    onDeleteItem: (id: number) => void;
    onItemPackedChange: (id: number, packed: boolean) => void;
}

export const PackingList = ({items, onDeleteItem, onItemPackedChange}: PackingListProps) => {
    
    return <ul className="list">
        {items.map(item => <Item key={item.id} id={item.id} description={item.description} quantity={item.quantity} packed={item.packed} onDeleteItem={onDeleteItem} onItemPackedChange={onItemPackedChange}/>)}
    </ul>
}