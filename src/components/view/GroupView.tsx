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
    id,
    name,
    items: cards,
    lang,
    setEdit,
    addCard,
    didUpdate,
    makeClass,
    removeFromParent,
  } = model;
  const { cardIds, addCardId, removeGroupId } = InstanceTaskManagerStore;
  const [isEdit, setIsEdit] = useState(model.isEdit);

  const cardEdit = () =>  {
    if (model.name.trimEnd()) {
      setIsEdit(!isEdit);
      setEdit(isEdit);
    } else {
      removeFromParent();
      removeGroupId(id);
    }
  };
  
  useUpdate(didUpdate, [cardIds.length, model.name, model.items.length]);

  const addNewCard = () => {
    const card = new CardModel({
      name: '',
      description: '',
      variant: 'thirdy',
      parent: model,
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
        <Row>
          <Title value={name} className={makeClass(['title'])} />
          <Button
            variant="thirdy"
            callback={cardEdit}
          >
            <img
              width={24}
              height={24}
              src={tailwindcssStyles['icons']['more']['src']}
              alt={tailwindcssStyles['icons']['more']['author']}
            />
          </Button>
        </Row>
      ) : (
        <Row>
          <Input
            value={name}
            variant="thirdy"
            placeholder={localization[lang].editGroupTitlePlaceholder}
            callback={updateNameCallback}
          />
          <Button
            variant="thirdy"
            callback={cardEdit}
          >
            <img
              width={24}
              height={24}
              src={tailwindcssStyles['icons']['more']['src']}
              alt={tailwindcssStyles['icons']['more']['author']}
            />
          </Button> 
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
