import {Item} from "../Item/Item";

export const PackingList = () => {
    const initialItems = [
        {id: 1, description: 'Passports', quantity: 2, packed: false},
        {id: 2, description: 'Socks', quantity: 12, packed: false},
    ]
    return <ul className="list">
        {initialItems.map(item => <Item id={item.id} description={item.description} quantity={item.quantity} packed={item.packed}/>)}
    </ul>
}