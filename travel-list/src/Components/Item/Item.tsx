export interface ItemProps {
    id: number;
    description: string;
    quantity: number;
    packed: boolean;
}

export const Item = ({id, description, quantity, packed}: ItemProps) => {
    const handleRemove = () => {};

    return <li>
      <span style={{textDecoration: packed ? 'line-through' : 'none'}}>
          {quantity} {description}
      </span>
      <button onClick={handleRemove}>❌</button>
  </li>
};