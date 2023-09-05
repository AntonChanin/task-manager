import React, { ChangeEventHandler, FC, useState } from 'react';

import createClass from '../../utils/createClass';
import tailwindcssStyles from '../../assets/styles';
import { EditProps } from '../../types/ui';

const Input: FC<Partial<EditProps>> = (props) => {
    const {
        className,
        variant = 'primary',
        theme = 'light',
        value,
        placeholder,
        callback,
    } = props;
    const [currentValue, setNewValue] = useState(value);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        event.preventDefault();
        setNewValue(event.target.value)
        callback?.({ value: event.target.value });
    };

    return (
        <input
            onChange={handleChange}
            value={currentValue}
            placeholder={placeholder}
            className={
                createClass([
                    'w-11/12',
                    tailwindcssStyles['ui']['edit'][variant](theme),
                    `${className}`
                ])
            }
        />
    );
};

export default Input;
