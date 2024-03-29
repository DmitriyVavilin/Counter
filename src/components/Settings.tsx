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
export const Settings: React.FC<SettingsType> = ({
                                                     defaultChangeSettings,
                                                     setChangeCounter,
                                                     changeMaxValue,
                                                     changeMinValue,
                                                     storage
                                                 }) => {


    const setSettings = () => {
        let minValue = storage.minValue
        setChangeCounter(minValue)
    }

    const startClass = storage.minValue === storage.maxValue || storage.maxValue <= storage.minValue ||
        storage.minValue >= storage.maxValue || storage.minValue < 0

    const setDisabledButton = storage.maxValue <= storage.minValue || storage.minValue < 0

    return (
        <div className={s.settings_form}>
            <div>
                <span className={s.text}>max value</span>
                <input type={'number'} className={startClass ? s.errorInput : ''} onChange={changeMaxValue}
                       value={storage.maxValue}
                />
            </div>
            <div>
                <span className={s.text}>min value</span>
                <input className={startClass ? s.errorInput : ''} type={'number'} onChange={changeMinValue}
                       value={storage.minValue}
                />
            </div>
            <div className={s.settings_buttons}>
                <Button title={'set'} disabled={setDisabledButton} callBack={() => setSettings()}/>
                <Button title={'set default'} callBack={() => defaultChangeSettings()}/>
            </div>
        </div>
    )
}