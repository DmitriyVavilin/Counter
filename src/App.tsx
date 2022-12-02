import React, {useState} from 'react';
import './App.css';
import {Counter} from "./component/Counter";
import {Button} from "./component/Button";

function App() {

    const [counter, setCounter] = useState(0)

    const ChangeButtonHandler = () => {
        const num = counter
        setCounter(num + 1)
        console.log(num)

    }

    const deleteValueCounter = () => {
        setCounter(0)
    }

  return (
    <div className="App">
        <Counter title={counter}/>
        <Button name={'inc'} callback={ChangeButtonHandler}/>
        <Button name={'reset'} callback={deleteValueCounter}/>
    </div>
  );
}

export default App;
