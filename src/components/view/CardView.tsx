import { FC, useState } from 'react';
import { observer } from 'mobx-react-lite';

import Article from '../ui/Article';
import Button from '../ui/Button';
import Paper from '../ui/Paper';
import { CardProps } from '../../types/view';
import Textarea from '../ui/Textarea';
import localization from '../../assets/localization';

const CardView: FC<CardProps> = (props) => {
  const { model } = props;
  const { description, variant, lang, makeClass, setEdit } = model;
  const [isEdit, setIsEdit] = useState(model.isEdit);

  const cardEdit = () =>  {
    setIsEdit(!isEdit);
    setEdit(isEdit);
  };

  const updateDescriptionCallback: <T>(props: Record<string, T>) => void = (props) => {
    const { value } = props;
    model.description = `${value}`;
  };

  return (
    <Paper>
      <Button
        className={makeClass(['editButton'])}
        value={'edit'}
        variant={variant}
        callback={cardEdit}
      />
      {!isEdit
        ? (
          <Article value={description} />
        ) : (
          <>
            <Textarea
              value={description}
              placeholder={localization[lang].editCardPlaceholder}
              callback={updateDescriptionCallback}
            />
            <Button variant="thirdy" callback={cardEdit}>ok</Button>
          </>
        )
      }
    </Paper>
  );
};

export default observer(CardView);
