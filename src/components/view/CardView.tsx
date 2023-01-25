import { FC } from 'react';
import { observer } from 'mobx-react-lite';

import Article from '../ui/Article';
import Button from '../ui/Button';
import Paper from '../ui/Paper';
import { CardProps } from '../../types/view';

const CardView: FC<CardProps> = (props) => {
  const { model } = props;
  const { description, variant, makeClass } = model;

  return (
    <Paper>
      <Button
        className={makeClass(['editButton'])}
        value={'edit'}
        variant={variant}
      />
      <Article value={description} />
    </Paper>
  );
};

export default observer(CardView);
