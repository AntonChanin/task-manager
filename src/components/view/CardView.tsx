import { FC, useState } from 'react';
import { observer } from 'mobx-react-lite';

import Article from '../ui/Article';
import Button from '../ui/Button';
import Paper from '../ui/Paper';
import Textarea from '../ui/Textarea';
import CardModel from '../../model/CardModel';
import localization from '../../assets/localization';
import { ViewWithModel } from '../../types/view';

const CardView: FC<ViewWithModel<CardModel>> = (props) => {
  const { model } = props;
  const { description, variant, lang, makeClass, setEdit } = model;
  const [isEdit, setIsEdit] = useState(model.isEdit);

  const cardEdit = () =>  {
    if (model.description.trimEnd()) {
      setIsEdit(!isEdit);
      setEdit(isEdit);
    };
  };

  const updateDescriptionCallback: <T>(props: Record<string, T>) => void =
    (props) => {
      const { value } = props;
      model.description = `${value}`.trim();
    };        

  return (
    <Paper>
      <Button
        className={makeClass(['editButton'])}
        value="..."
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
              variant="thirdy"
              placeholder={localization[lang].editCardPlaceholder}
              callback={updateDescriptionCallback}
            />
          </>
        )
      }
    </Paper>
  );
};

export default observer(CardView);
