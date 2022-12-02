import React from "react";

type CounterType = {
    title: number
}

export const Counter = (props: CounterType) => {
    const {title} = props

    return(
        <>
        <h1>{title}</h1>
        </>
    )
}