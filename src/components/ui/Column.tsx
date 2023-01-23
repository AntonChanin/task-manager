import { FC, PropsWithChildren } from 'react';

import localization from '../../assets/localization';
import Button from './Button';
import Title from './Title';

type Props = {};

const Column: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <div className="bg-gray-300 w-1/4 h-max px-4 rounded-xl overflow-y-auto">
      <div className="flex place-content-between py-4">
        <Title value='Hello' className='' />
      </div>
      {children}
      <Button value={`+ ${localization['ENG'].addCard}`} />
    </div>
  );
};

export default Column;
