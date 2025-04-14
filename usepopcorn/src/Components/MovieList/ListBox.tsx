import {useState} from "react";

export interface ListBoxProps {
    children?: React.ReactNode;
}

export default function ListBox({children}: ListBoxProps) {
    const [isOpen, setIsOpen] = useState(true);

    return <div className="box">
        <button
            className="btn-toggle"
            onClick={() => setIsOpen((open) => !open)}
        >
            {isOpen ? "–" : "+"}
        </button>
        {isOpen && children}
    </div>
}