import { FC, PropsWithChildren } from 'react';
import tailwindcssStyles from '../../assets/styles';

import { TPaper } from '../../types/ui';

const Paper: FC<PropsWithChildren<Partial<TPaper>>> = (props) => {
  const {
    className = 'drop-shadow-md bg-white',
    variant = 'primary',
    theme = 'light',
    children,
  } = props
  return (
    <div className={`${className} ${tailwindcssStyles['ui']['paper'][variant](theme)}`}>
      {children}
    </div>
  );
};

export default Paper;
