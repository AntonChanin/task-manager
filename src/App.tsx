import { observer } from 'mobx-react-lite';

import GroupModel from './model/GroupModel';
import CardModel from './model/CardModel';
import BoardView from './components/view/BoardView';
import InstanceTaskManagerStore from './store';
import './App.css';

function App() {
  const { boards } = InstanceTaskManagerStore;
  const groupModel = new GroupModel({ name: 'Basics' })
  groupModel.addCard(
    new CardModel({
      name: '', 
      description: `
        create mode 100644 postcss.config.cjs
        create mode 100644 src/store/index.ts
        create mode 100644 tailwind.config.cjs
      `
    })
  );

  return (
    <div className="App">
      <BoardView model={boards[0]} />   
    </div>
  );
};

export default observer(App);
