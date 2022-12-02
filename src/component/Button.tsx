import React from "react";


type ButtonType = {
    name: string
    callback: ()=>void
}

export const Button = (props: ButtonType) => {
    const {name, callback} = props

    const onclickHandler = () => {
        callback()
    }

    return(
        <button onClick={onclickHandler}>{name}</button>
    )
}