import { FC } from 'react';

import ActionBar from './ActionBar';
import Article from './Article';
import { CardProps } from '../../types/card';

type Props = CardProps;

const Card: FC<Props> = ({ article, actionBar }) => {
  return (
    <div className={`drop-shadow-md bg-white border-radius border-none rounded-xl p-2 mb-4`}>
      <Article {...article} />
      <ActionBar {...actionBar} />
    </div>
  );
};

export default Card;
