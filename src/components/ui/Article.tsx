import { FC } from 'react';

import { BaseComponentProps } from '../../types/common';

type Props = Partial<BaseComponentProps>

const Article: FC<Props> = ({ value = '', styles }) => {
  const { className } = styles ?? { className : '' };
  return <article className={`font-sans ${className}`.trimEnd()}>{value}</article>;
};

export default Article;
