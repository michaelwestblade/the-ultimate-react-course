import React from "react";

export interface ItemProps {
    id: number;
    description: string;
    quantity: number;
    packed: boolean;
    onDeleteItem: (id: number) => void;
    onItemPackedChange: (id: number, packed: boolean) => void;
}

export interface Item {
    id: number;
    description: string;
    quantity: number;
    packed: boolean;
}

export const Item = ({id, description, quantity, packed, onDeleteItem, onItemPackedChange}: ItemProps) => {
    const handleRemove = () => {
        onDeleteItem(id);
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onItemPackedChange(id, e.target.checked);
    }

    return <li>
        <input type="checkbox" checked={packed} onChange={handleCheckboxChange}/>
        <span style={{textDecoration: packed ? 'line-through' : 'none'}}>
          {quantity} {description}
        </span>
        <button onClick={handleRemove}>❌</button>
    </li>
};