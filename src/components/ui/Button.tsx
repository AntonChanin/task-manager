import { FC, MouseEventHandler, PropsWithChildren } from 'react';
import tailwindcssStyles from '../../assets/styles';

import { TButton } from '../../types/ui';

const Button: FC<PropsWithChildren<Partial<TButton>>> = (props) => {
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
      className={
        `${tailwindcssStyles['ui']['button'][variant](theme)} ${className}`
          .trimEnd()
      }
    >
      {value}{children}
    </button>
  );
}

export default Button;
