import { FC } from 'react';

import { TArticle } from '../../types/ui';

const Article: FC<Partial<TArticle>> = ({ value = '', className = '' }) => {
  return <article className={`font-sans ${className}`.trimEnd()}>{value}</article>;
};

export default Article;
