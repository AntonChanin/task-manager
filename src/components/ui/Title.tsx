import { FC } from 'react'

import createClass from '../../utils/createClass';

type Props = {
  value?: string;
  className?: string;
};

const Title: FC<Props> = ({ value = '', className = '' }) => (
  <div className={createClass(['font-sans', 'font-bold', `${className}`, ])}>{value}</div>
);

export default Title;
