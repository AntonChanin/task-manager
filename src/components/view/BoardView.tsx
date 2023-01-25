import { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import Title from '../ui/Title';
import GroupModel from '../../model/GroupModel';
import GroupView from './GroupView';
import CardModel from '../../model/CardModel';
import InstanceTaskManagerStore from '../../store';
import localization from '../../assets/localization';
import { BoardProps } from '../../types/view';
import Paper from '../ui/Paper';

const BoardView: FC<BoardProps> = (props) => {
  const { model } = props;
  const { __default: { items: defaultGroup }, classList, items: groups, lang, addGroup } = model;
  const { addGroupId, addCardId, cardIds, groupIds } = InstanceTaskManagerStore;

  useEffect(() => {}, [cardIds.length, groupIds.length])

  const addNewGroup = () => {
    const group = new GroupModel({
      name: 'name',
      description: 'lorem smorem',
    })
    addGroupId(group.id);
    group.addCard(new CardModel({
      name: '',
      description: 'lorem smorem',
    }));
    addCardId(group.items[group.items.length - 1].id);
    addGroup(group);
  };

  return (
    <Paper variant="secondary" className={classList['paper']}>
      <Title className={classList['title']} value={localization[lang].welcomeBoard} />
      <div className={classList['group']}>
        {groups.map((group) => <GroupView model={group}/>)}
        <GroupView callback={addNewGroup} model={defaultGroup[0]}/>
      </div>     
    </Paper>    
  );
};

export default observer(BoardView);
