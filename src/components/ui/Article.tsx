import { FC } from 'react';

import createClass from '../../utils/createClass';
import { ArticleProps } from '../../types/ui';

const Article: FC<Partial<ArticleProps>> = ({ value = '', className = '' }) => {
    return <article className={createClass(['font-sans', `${className}`])}>{value}</article>;
};

export default Article;
