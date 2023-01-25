import { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import Button from '../ui/Button';
import Paper from '../ui/Paper';
import Title from '../ui/Title';
import CardView from './CardView';
import CardModel from '../../model/CardModel';
import InstanceTaskManagerStore from '../../store';
import localization from '../../assets/localization';
import { GroupProps } from '../../types/view';

const GroupView: FC<GroupProps> = (props) => {
  const { callback, model } = props;
  const { makeClass, name, items: cards, lang, addCard } = model;
  const { addCardId, cardIds } = InstanceTaskManagerStore;
  
  useEffect(() => {}, [cardIds.length])

  const addNewCard = () => {
    const card = new CardModel({
      name: '',
      description: 'lorem smorem',
    });
    addCard(card);
    addCardId(card.id);
  };

  return (
    <Paper 
      className={makeClass(['paper', 'paperColor'])}
    >
      {name && <Title value={name} className={makeClass(['title'])} />}
      <div className={makeClass(['cards'])}>
        {cards.map((card) => <CardView key={`card__${card.id}`} model={card} />)}
      </div>
      <Button
        className={makeClass(['button'])}
        theme={cards.length ? 'light' : 'dark'}
        value={`+ ${localization[lang][cards.length ? 'addCard' : 'addAnotherList']}`}
        variant="thirdy"
        callback={callback ?? addNewCard}
      />
    </Paper>
  );
};

export default observer(GroupView);

