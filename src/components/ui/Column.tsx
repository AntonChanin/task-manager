import { FC, PropsWithChildren } from 'react';

import Button from './Button';
import Title from './Title';
import Paper from './Paper';
import localization from '../../assets/localization';
import { BaseComponentProps, StylesProps } from '../../types/common';

const Column: FC<PropsWithChildren<Partial<BaseComponentProps & StylesProps>>> = ({ value = '', className = '', children }) => {
  const classList: Record<string, string> = typeof className === 'string'  ? { 'column': className } : className;

  return (
    <Paper 
      className={
        `
          ${classList['column']} ${children ? 'bg-gray-100 ' : 'bg-blue-500 '}
          w-1/4 h-max px-4 overflow-y-auto mr-2 flex-col items-start
        `
          .trimEnd()
      }
    >
      {value &&
        <div className="flex place-content-between py-4">
          <Title value={value} className={classList['title']} />
        </div>
      }
      {children}
      <Button
        className="flex"
        theme={children ? 'light' : 'dark'}
        value={`+ ${localization['ENG'][children ? 'addCard' : 'addAnotherList']}`}
        variant="thirdy"
      />
    </Paper>
  );
};

export default Column;
