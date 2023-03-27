import React from "react";

type ButtonType = {
    title: string
    callBack: () => void
}

export const Button: React.FC<ButtonType> = ({title,callBack}) => {

    const onClickHandler = () => {
        callBack()
    }

    return (
        <button onClick={onClickHandler}>{title}</button>
    )
}