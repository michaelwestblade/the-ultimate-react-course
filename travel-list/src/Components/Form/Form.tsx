import {FormEvent, useState} from "react";
import {ItemProps} from "../Item/Item";

export interface FormProps {
    submitHandler: (newItem: ItemProps) => void;
}

export const Form = ({submitHandler}: FormProps) => {
    const maxOptions = 20;
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(1);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!description) return;

        const newItem = {description, quantity, packed: false, id: Date.now()};
        setDescription("");
        setQuantity(1);

        submitHandler(newItem);
    }

    return <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your 😍 trip?</h3>
        <select value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))}>
            {Array.from({length: maxOptions}).map((_, index) => <option key={index+1} value={index+1}>{index+1}</option>)}
        </select>
        <input type="text" placeholder="Item..." value={description} onChange={(e) => setDescription(e.target.value)} />
        <button>Add</button>
    </form>
}