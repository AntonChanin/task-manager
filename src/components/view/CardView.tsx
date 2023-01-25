import { FC } from 'react';
import { observer } from 'mobx-react-lite';

import Article from '../ui/Article';
import Button from '../ui/Button';
import Paper from '../ui/Paper';
import { CardProps } from '../../types/view';

const CardView: FC<CardProps> = (props) => {
  const { model } = props;
  const { description, variant, classList } = model;
  return (
    <Paper className={classList['paper']}>
      <Button className={classList['editButton']} value={'edit'} variant={variant} />
      <Article value={description} />
    </Paper>
  );
};

export default observer(CardView);
