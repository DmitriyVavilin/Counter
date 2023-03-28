import React, {ChangeEvent, useEffect, useState} from "react";
import {Button} from "./Button";
import {Settings} from "./Settings";
import s from './Counter.module.css'


export const Counter = () => {
    const [storage, setStorage] = useState({
        startValue: 0,
        maxValue: 5,
        minValue: 1
    })


    useEffect(() => {
        let valueString = localStorage.getItem('counterValue')
        if (valueString) {
            let newValue = JSON.parse(valueString)
            setStorage(newValue)
        }
    }, [])


    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStorage({...storage, maxValue: Number(e.currentTarget.value)})
    }

    const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStorage({...storage, minValue: Number(e.currentTarget.value)})
    }

    const ChangeCounterInc = () => {
        setStorage({...storage, startValue: storage.startValue + 1})
    }

    const removeCounter = () => {
        let startValue = 0
        setStorage({...storage, startValue: startValue})
    }


    const setChangeCounter = (startValue: number) => {
        let state = {...storage, startValue: startValue}
        localStorage.setItem('counterValue', JSON.stringify(state))
        setStorage(state)
    }


    const defaultChangeSettings = () => {
        let storage = {
            startValue: 0,
            maxValue: 5,
            minValue: 1
        }
        setStorage(storage)
    }

    return (
        <>
            <div className={s.counter_form}>
                <h1 className={storage.startValue >= storage.maxValue ? s.startValue : ''}>{storage.startValue}</h1>
                <div className={s.counter_buttons}>
                    <Button title={'inc'}
                            callBack={ChangeCounterInc}
                            disabled={storage.startValue >= storage.maxValue}/>
                    <Button title={'reset'} callBack={removeCounter}/>
                </div>

            </div>
            <div>
                <Settings
                    setChangeCounter={setChangeCounter}
                    changeMaxValue={changeMaxValue}
                    changeMinValue={changeMinValue}
                    storage={storage}
                    defaultChangeSettings={defaultChangeSettings}
                />
            </div>
        </>
    )
}