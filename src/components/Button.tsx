import React, {ButtonHTMLAttributes} from "react";

interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement>{
    title: string
    callBack: () => void
}

export const Button: React.FC<ButtonType> = ({title,callBack, ...restProps}) => {

    const onClickHandler = () => {
        callBack()
    }

    return (
        <button type={'button'} onClick={onClickHandler} {...restProps}>{title}</button>
    )
}