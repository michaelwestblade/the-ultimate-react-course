import {Item} from "../Item/Item";

export interface StatsProps {
    items: Item[];
}

export const Stats = ({items}: StatsProps) => {
    const itemsTotal = items.length;
    const itemsPackedTotal = items.filter(item => item.packed).length;
    const itemsPackedPercentage = itemsPackedTotal / itemsTotal * 100;
    return <footer className="stats">
        <em>
            🧳 You have {itemsTotal} items in your packing list and you already packed {itemsPackedTotal} ({itemsPackedPercentage}%).
        </em>
    </footer>
}