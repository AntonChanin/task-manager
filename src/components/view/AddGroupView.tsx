import { FC } from 'react';
import { observer } from 'mobx-react-lite';

import Button from '../ui/Button';
import Paper from '../ui/Paper';
import Title from '../ui/Title';
import CardView from './CardView';
import InstanceTaskManagerStore from '../../store';
import localization from '../../assets/localization';
import tailwindcssStyles from '../../assets/styles';
import useUpdate from '../../hooks/useUpdate';
import { GroupProps } from '../../types/view';

const AddGroupView: FC<GroupProps> = (props) => {
  const { callback, model } = props;
  const {
    name,
    items: cards,
    lang,
    didUpdate,
    makeClass,
  } = model;
  const { cardIds } = InstanceTaskManagerStore;
  
  useUpdate(didUpdate, [cardIds.length, name]);

  return (
    <Paper className={makeClass(['paper', tailwindcssStyles['theme']['background']['primary']])}>
      {name && <Title value={name} className={makeClass(['title'])} />}
      <div className={makeClass(['cards'])}>
        {cards.map((card) => <CardView key={`card__${card.id}`} model={card} />)}
      </div>
      <Button
        className={makeClass(['button'])}
        theme="dark"
        value={`+ ${localization[lang].addAnotherList}`}
        variant="thirdy"
        callback={callback}
      />
    </Paper>
  );
};

export default observer(AddGroupView);
