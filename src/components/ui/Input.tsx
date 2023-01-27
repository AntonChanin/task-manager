import React, { ChangeEventHandler, FC, useState } from 'react';

import createClass from '../../utils/createClass';
import { EditProps } from '../../types/ui';

const Input: FC<Partial<EditProps>> = (props) => {
  const { className, value, placeholder, callback } = props;
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
          'outline-none',
          'border',
          'm-auto',
          `${className}`
        ])
      }
    />
  );
};

export default Input;
