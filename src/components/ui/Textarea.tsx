import React, { ChangeEventHandler, FC, useState } from 'react';

import createClass from '../../utils/createClass';
import tailwindcssStyles from '../../assets/styles';
import { EditProps } from '../../types/ui';

const Textarea: FC<Partial<EditProps>> = (props) => {
    const {
        className,
        variant = 'primary',
        theme = 'light',
        value,
        placeholder,
        callback,
    } = props;
    const [currentValue, setNewValue] = useState(value);

    const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        event.preventDefault();
        setNewValue(event.target.value)
        callback?.({ value: event.target.value });
    };

  return (
    <textarea
        onChange={handleChange}
        value={currentValue}
        placeholder={placeholder}
        className={
            createClass([
            tailwindcssStyles['ui']['edit'][variant](theme),
            `${className}`
            ])
        }
    />
  );
};

export default Textarea;
