import React from "react";
import s from './Counter.module.css'

type CounterType = {
    title: number
}

export const Counter = (props: CounterType) => {
    const {title} = props

    return(
        <div className={s.counter_form}>
        <h1>{title}</h1>
        </div>
    )
}