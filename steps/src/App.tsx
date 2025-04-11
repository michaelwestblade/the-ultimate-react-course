import React from 'react';

function App() {
    const [step, setStep] = React.useState(0);
    const [isOpened, setIsOpened] = React.useState(true);
    const messages = [
        "Learn React ⚛️",
        "Apply for jobs 💼",
        "Invest your new income 🤑",
    ];

    const incrementStep = () => {
        if (step < messages.length - 1) {
            setStep(step + 1);
        } else {
            setStep(0);
        }
    }

    const decrementStep = () => {
        if (step > 0) {
            setStep(step - 1);
        } else {
            setStep(messages.length - 1);
        }
    }

    return (
        <div className="App">
            <button onClick={() => setIsOpened(!isOpened)} className="close">&times;</button>
            { isOpened &&
                <div className="steps">
                    <div className="numbers">
                        {messages.map((_, index) => <div key={index} className={index === step ? "active" : ""}>{index+1}</div>)}
                    </div>
                    <div className="message">{messages[step]}</div>

                    <div className="buttons">
                        <button onClick={decrementStep} style={{backgroundColor: '#7950f2', color: '#fff'}}>Previous</button>
                        <button onClick={incrementStep} style={{backgroundColor: '#7950f2', color: '#fff'}}>Next</button>
                    </div>
                </div>
            }
        </div>
    );
}

export default App;
