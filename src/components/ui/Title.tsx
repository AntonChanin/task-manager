import { FC } from 'react'

type Props = {
  value?: string;
  className?: string;
};

const Title: FC<Props> = ({ value = '', className = '' }) => {
  return <div className={`font-sans	font-bold ${className}`.trimEnd()}>{value}</div>;
};

export default Title;
