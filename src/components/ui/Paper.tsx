import { FC, PropsWithChildren } from 'react';

import tailwindcssStyles from '../../assets/styles';
import createClass from '../../utils/createClass';
import { PaperProps } from '../../types/ui';

const Paper: FC<PropsWithChildren<Partial<PaperProps>>> = (props) => {
  const {
    className = 'drop-shadow-md bg-white',
    variant = 'primary',
    theme = 'light',
    draggable,
    onDragEnd: handleDragEnd,
    onDragOver: handleDragOver,
    onDrop: handleDrop,
    children,
  } = props
  return (
    <div
      draggable={draggable}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={createClass([`${className}`, tailwindcssStyles['ui']['paper'][variant](theme)])}
    >
      {children}
    </div>
  );
};

export default Paper;
