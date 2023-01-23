import { FC, MouseEventHandler, PropsWithChildren } from 'react';

import { BaseComponentProps, ClickButton, VoidCallback } from '../../types/common';

type Props = Partial<BaseComponentProps & ClickButton & VoidCallback>

const Button: FC<PropsWithChildren<Props>> = ({ value = '', styles, callback, onClick: handleClick, children }) => {
  const { className } = styles ?? { className: '' };
  const defaultHandleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event?.preventDefault();
    callback?.();
  };
  return <button onClick={handleClick ?? defaultHandleClick} className={`${className}`.trimEnd()}>{value}{children}</button>
}

export default Button;
