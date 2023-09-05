import React, { FC, MouseEventHandler, PropsWithChildren } from 'react';

import tailwindcssStyles from '../../assets/styles';
import createClass from '../../utils/createClass';
import { ButtonProps } from '../../types/ui';

const Button: FC<PropsWithChildren<Partial<ButtonProps>>> = (props) => {
    const {
        value = '',
        className = '',
        variant = 'primary',
        theme = 'light',
        callback,
        onClick: handleClick,
        children,
    } = props;
    const defaultHandleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
        event?.preventDefault();
        callback?.();
    };
    return (
        <button
            onClick={handleClick ?? defaultHandleClick}
            className={createClass([tailwindcssStyles['ui']['button'][variant](theme), `${className}`])}
        >
            {value}{children}
        </button>
    );
}

export default Button;
