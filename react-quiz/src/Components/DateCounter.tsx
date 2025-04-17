import {ReactEventHandler, useReducer, useState} from "react";

const reducer = (currentState: {count: number; step: number}, action: { type: string; payload: number }): {count: number; step: number} => {
    switch (action.type) {
        case 'decCount':
            return {
                ...currentState,
                count: currentState.count - action.payload
            }
        case 'incCount':
            return {
                ...currentState,
                count: currentState.count + action.payload
            }
        case 'setCount':
            return {
                ...currentState,
                count: action.payload
            }
        case 'setStep':
            return {
                ...currentState,
                step: action.payload
            }
        default:
            return currentState;
    }
}

function DateCounter() {
    // const [count, setCount] = useState(0);
    const initialState = {count: 0, step: 1};
    const [state, dispatch] = useReducer(reducer, initialState);
    const {step, count} = state;

    // This mutates the date object.
    const date = new Date("june 21 2027");
    date.setDate(date.getDate() + count);

    const dec = function () {
        // setCount((count) => count - 1);
        //setCount((count) => count - step);
        dispatch({type: 'decCount', payload: step});
    };

    const inc = function () {
        dispatch({type: 'incCount', payload: step});
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
        dispatch({type: 'setStep', payload: 1});
        dispatch({type: 'setCount', payload: 0});
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
