import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./component/Counter";
import {Button} from "./component/Button";

function App() {

    const [counter, setCounter] = useState(0)
    const keyValue = 'caunterValue'

    useEffect(() => {
        let getValue = localStorage.getItem(keyValue)
        if (getValue) {
            let newValue = JSON.parse(getValue)
            setCounter(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(keyValue, JSON.stringify(counter))
    }, [counter])


    const ChangeButtonHandler = () => {
        const num = counter
        setCounter(num + 1)

    }

    const deleteValueCounter = () => {
        setCounter(0)
    }

    return (
        <div className="App">
            <div className={'counter_form'}>
                <Counter title={counter}/>
                <div className={'counter_buttons'}>
                    <Button  name={'inc'} callback={ChangeButtonHandler}/>
                    <Button name={'reset'} callback={deleteValueCounter}/>
                </div>

            </div>

        </div>
    );
}

export default App;
