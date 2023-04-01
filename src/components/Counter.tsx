import React, {ChangeEvent, useEffect, useState} from "react";
import {Button} from "./Button";
import {Settings, StorageType} from "./Settings";
import s from './Counter.module.css'


export const Counter = () => {
    const [storage, setStorage] = useState<StorageType>({
        startValue: 1,
        maxValue: 5,
        minValue: 1
    })

    const [settings, SetSettings] = useState(false)

    useEffect(() => {
        let settingsValue = localStorage.getItem('settingsValue')
        if (settingsValue) {
            let newValue = JSON.parse(settingsValue)
            setStorage(newValue)
        }
    }, [])

    // useEffect(()=>{
    //     let counterValue = localStorage.getItem('counterValue')
    //     if(counterValue){
    //         let newValue = JSON.parse(counterValue)
    //         setStorage(newValue)
    //     }
    // },[storage.startValue])


    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStorage({...storage, maxValue: Number(e.currentTarget.value)})
    }

    const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStorage({...storage, minValue: Number(e.currentTarget.value)})
    }

    const ChangeCounterInc = () => {
        // localStorage.setItem('counterValue', JSON.stringify(storage.startValue))
        setStorage({...storage, startValue: storage.startValue + 1})

    }

    const removeCounter = () => {
        let startValue = 1
        setStorage({...storage, startValue: startValue})
    }


    const setChangeCounter = (startValue: number) => {
        let state = {...storage, startValue: startValue}
        localStorage.setItem('settingsValue', JSON.stringify(state))
        setStorage(state)
    }


    const defaultChangeSettings = () => {
        setStorage({...storage, maxValue: 5, minValue: 1})
    }


    const errorText = storage.maxValue <= storage.minValue || storage.minValue >= storage.maxValue
    const errorButton = storage.startValue >= storage.maxValue

    return (
        <>
            <div className={s.counter_form}>
                <div>
                    <Button title={'show settings'} callBack={()=>SetSettings(!settings)}/>
                </div>
                <h1 className={errorButton ? s.redButton : ''}>{errorText ?
                    <span className={errorText ? s.redButton : ''}>'incorrect value'</span> : storage.startValue}</h1>
                <div className={s.counter_buttons}>
                    <Button title={'inc'}
                            callBack={ChangeCounterInc}
                            disabled={storage.startValue >= storage.maxValue}/>
                    <Button title={'reset'} callBack={removeCounter}/>
                </div>

            </div>
            <div>
                {settings === true &&
                    <Settings
                        setChangeCounter={setChangeCounter}
                        changeMaxValue={changeMaxValue}
                        changeMinValue={changeMinValue}
                        storage={storage}
                        defaultChangeSettings={defaultChangeSettings}
                    />
                }
            </div>
        </>
    )
}
