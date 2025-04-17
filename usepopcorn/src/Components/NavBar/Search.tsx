import {RefObject, useEffect, useRef} from "react";

export interface SearchProps {
    query: string;
    setQuery: (query: string) => void;
}

export default function Search({query, setQuery}: SearchProps) {
    const inputElement: RefObject<HTMLInputElement | null> = useRef(null);

    useEffect(() => {
        if (inputElement){
            inputElement?.current?.focus();
        }
    })

    return <input type="text"
                  className="search"
                  placeholder="Search movies..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  ref={inputElement}/>
}