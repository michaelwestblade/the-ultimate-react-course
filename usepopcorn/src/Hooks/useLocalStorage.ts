import {Dispatch, useEffect, useState} from "react";

export function useLocalStorage<T>(key: string, defaultValue: T): [T, Dispatch<React.SetStateAction<T>>] {
    const [value, setValue] = useState<T>(function (){
        const storedValue = localStorage.getItem(key) || "";
        return storedValue ? JSON.parse(storedValue) as T : defaultValue;
    });

    useEffect(function (){
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue];
}
