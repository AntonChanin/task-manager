import { FC, } from 'react';
import { observer } from 'mobx-react-lite';

import Title from '../ui/Title';
import Paper from '../ui/Paper';
import BoardModel from '../../model/BoardModel';
import GroupModel from '../../model/GroupModel';
import AddGroupView from './AddGroupView';
import GroupView from './GroupView';
import InstanceTaskManagerStore from '../../store';
import useUpdate from '../../hooks/useUpdate';
import useDragAndDrop from '../../hooks/useDragAndDrop';
import localization from '../../assets/localization';
import { ViewWithModel } from '../../types/view';

const BoardView: FC<ViewWithModel<BoardModel>> = (props) => {
  const { model } = props;
  const {
    __default: { items: defaultGroup },
    items: groups,
    lang,
    addGroup,
    didUpdate,
    makeClass,
  } = model;
  const { cardIds, groupIds, addGroupId } = InstanceTaskManagerStore;
  const { isDragging, listItems, handleDragging, handleUpdateList  } = useDragAndDrop(groups);
  
  useUpdate(didUpdate, [cardIds.length, groupIds.length, listItems]);
  

  const addNewGroup = () => {
    const group = new GroupModel({
      name: 'name',
      description: 'lorem smorem',
      parent: model,
    })
    addGroupId(group.id);
    addGroup(group);
  };

  return (
    <Paper
      variant="secondary"
      className={makeClass(['paper'])}
    >
      {<Title
        className={makeClass(['title'])}
        value={localization[lang].welcomeBoard}
      />}
      <div className={makeClass(['group'])}>
        {(listItems as GroupModel[]).map((group) => <GroupView
          key={`group__${group.id}`}
          model={group}
          isDragging={isDragging}
          handleDragging={handleDragging}
          handleUpdateList={handleUpdateList}
        />)}
        <AddGroupView
          callback={addNewGroup}
          model={defaultGroup[0]}
        />
      </div>     
    </Paper>    
  );
};

export default observer(BoardView);
