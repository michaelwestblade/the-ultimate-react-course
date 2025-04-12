import {Item, ItemProps} from "../Item/Item";
import {useState} from "react";

export interface PackingListProps {
    items: ItemProps[];
}

export const PackingList = ({items}: PackingListProps) => {
    
    return <ul className="list">
        {items.map(item => <Item key={item.id} id={item.id} description={item.description} quantity={item.quantity} packed={item.packed}/>)}
    </ul>
}