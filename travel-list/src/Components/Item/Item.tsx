export interface ItemProps {
    id: number;
    description: string;
    quantity: number;
    packed: boolean;
    onDeleteItem: (id: number) => void;
}

export interface Item {
    id: number;
    description: string;
    quantity: number;
    packed: boolean;
}

export const Item = ({id, description, quantity, packed, onDeleteItem}: ItemProps) => {
    const handleRemove = () => {
        onDeleteItem(id);
    };

    return <li>
      <span style={{textDecoration: packed ? 'line-through' : 'none'}}>
          {quantity} {description}
      </span>
      <button onClick={handleRemove}>❌</button>
  </li>
};