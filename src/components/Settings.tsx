import React, {ChangeEvent} from "react";
import {Button} from "./Button";
import s from './Settings.module.css'

export type StorageType = {
    startValue: number
    maxValue: number
    minValue: number
}

type SettingsType = {
    storage: StorageType
    setChangeCounter: (startValue: number) => void
    changeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    changeMinValue: (e: ChangeEvent<HTMLInputElement>) => void
}
export const Settings: React.FC<SettingsType> = ({setChangeCounter, changeMaxValue, changeMinValue, storage}) => {


    const setSettings = () => {
        let minValue = storage.minValue
        setChangeCounter(minValue)
    }


    return (
        <div className={s.settings_form}>
            <div>
                <span>max value</span>
                <input type={'number'} onChange={changeMaxValue} value={storage.maxValue}/>
            </div>
            <div>
                <span>min value</span>
                <input type={'number'} onChange={changeMinValue} value={storage.minValue}/>
            </div>
            <Button className={s.btn} title={'set'} callBack={() => setSettings()}/>
        </div>
    )
}