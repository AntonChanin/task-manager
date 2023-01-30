import { FC, useState } from 'react';
import { observer } from 'mobx-react-lite';

import Button from '../ui/Button';
import Title from '../ui/Title';
import Input from '../ui/Input';
import Paper from '../ui/Paper';
import Row from '../ui/Row';
import CardView from './CardView';
import CardModel from '../../model/CardModel';
import GroupModel from '../../model/GroupModel';
import InstanceTaskManagerStore from '../../store';
import localization from '../../assets/localization';
import tailwindcssStyles from '../../assets/styles';
import useUpdate from '../../hooks/useUpdate';
import { ViewWithModel } from '../../types/view';

const GroupView: FC<ViewWithModel<GroupModel>> = (props) => {
  const { model } = props;
  const {
    name,
    items: cards,
    lang,
    setEdit,
    addCard,
    didUpdate,
    makeClass,
  } = model;
  const { cardIds, addCardId } = InstanceTaskManagerStore;
  const [isEdit, setIsEdit] = useState(model.isEdit);

  const cardEdit = () =>  {
    setIsEdit(!isEdit);
    setEdit(isEdit);
  };
  
  useUpdate(didUpdate, [cardIds.length, model.name]);

  const addNewCard = () => {
    const card = new CardModel({
      name: '',
      description: '',
      variant: 'thirdy',
    });
    addCard(card);
    addCardId(card.id);
  };

  const updateNameCallback: <T>(props: Record<string, T>) => void = (props) => {
    const { value } = props;
    model.name = `${value}`;
  }

  return (
    <Paper className={makeClass(['paper', tailwindcssStyles['theme']['background']['thirdy']])}>
      {!isEdit ? (
        name && (
          <Row>
            <Title value={name} className={makeClass(['title'])} />
            <Button
              value="..."
              variant="thirdy"
              callback={cardEdit}
            />
          </Row>
        )
      ) : (
        <Row>
          <Input
            value={name}
            variant="thirdy"
            placeholder={localization[lang].editGroupTitlePlaceholder}
            callback={updateNameCallback}
          />
          <Button
            value="..."
            variant="thirdy"
            callback={cardEdit}
          /> 
        </Row>
      )}
      <div className={makeClass(['cards'])}>
        {cards.map((card) => <CardView key={`card__${card.id}`} model={card} />)}
      </div>
      <Button
        className={makeClass(['button'])}
        theme="light"
        value={`+ ${localization[lang].addCard}`}
        variant="thirdy"
        callback={addNewCard}
      />
    </Paper>
  );
};

export default observer(GroupView);
