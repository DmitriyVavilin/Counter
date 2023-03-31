import React, {ChangeEvent, useState} from "react";
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
    defaultChangeSettings: () => void
}
export const Settings: React.FC<SettingsType> = ({defaultChangeSettings,setChangeCounter, changeMaxValue, changeMinValue, storage}) => {



    const setSettings = () => {
        let minValue = storage.minValue
        setChangeCounter(minValue)
    }


    let startClass = (storage.minValue < 1) || (storage.maxValue - storage.startValue) % storage.minValue !== 0 ? s.errorInput : ''
    let startEndClass = storage.maxValue <= storage.minValue ? s.errorInput : ''

    const setDisabled = storage.maxValue <= storage.minValue

    return (
        <div className={s.settings_form}>
            <div>
                <span className={s.text}>max value</span>
                <input type={'number'} onChange={changeMaxValue} value={storage.maxValue}
                       />
            </div>
            <div>
                <span className={s.text}>min value</span>
                <input type={'number'} onChange={changeMinValue} value={storage.minValue}
                       />
            </div>
            <div className={s.settings_buttons}>
                <Button  title={'set'} disabled={setDisabled} callBack={() => setSettings()}/>
                <Button  title={'default set'} callBack={() => defaultChangeSettings()}/>
            </div>
        </div>
    )
}