import {ReactEventHandler, useReducer, useState} from "react";

const reducer = (currentState: number, action: { type: string; payload: number }): number => {
    switch (action.type) {
        case 'dec':
            return currentState - action.payload;
        case 'inc':
            return currentState + action.payload;
        case 'setCount':
            return action.payload;
        case 'setStep':
            return action.payload;
        default:
            return currentState;
    }
}

function DateCounter() {
    // const [count, setCount] = useState(0);
    const [count, dispatch] = useReducer(reducer, 0);
    const [step, setStep] = useState(1);

    // This mutates the date object.
    const date = new Date("june 21 2027");
    date.setDate(date.getDate() + count);

    const dec = function () {
        // setCount((count) => count - 1);
        //setCount((count) => count - step);
        dispatch({type: 'dec', payload: step});
    };

    const inc = function () {
        dispatch({type: 'inc', payload: step});
        // setCount((count) => count + 1);
        //setCount((count) => count + step);
    };

    const defineCount = function (e: React.ChangeEvent<HTMLInputElement>) {
        //setCount(Number(e.target.value));
        dispatch({type: 'setCount', payload: Number(e.target.value)});
    };

    const defineStep = function (e: React.ChangeEvent<HTMLInputElement>) {
        dispatch({type: 'setStep', payload: Number(e.target.value)});
    };

    const reset = function () {
        //setCount(0);
        setStep(1);
    };

    return (
        <div className="counter">
            <div>
                <input
                    type="range"
                    min="0"
                    max="10"
                    value={step}
                    onChange={defineStep}
                />
                <span>{step}</span>
            </div>

            <div>
                <button onClick={dec}>-</button>
                <input value={count} onChange={defineCount}/>
                <button onClick={inc}>+</button>
            </div>

            <p>{date.toDateString()}</p>

            <div>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
}

export default DateCounter;
