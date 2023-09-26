import { useState } from 'react';
import { observer } from 'mobx-react-lite';

import BoardModel from './model/BoardModel';
import GroupModel from './model/GroupModel';
import CardModel from './model/CardModel';
import BoardPage from './pages/BoardPage';
import MainPage from './pages/MainPage';
import InstanceTaskManagerStore from './store';
import './App.css';


function App() {
    const [currentBoard, setCurrentBoard] = useState<BoardModel | null>(null);

    const { pages } = InstanceTaskManagerStore;
    const groupModel = new GroupModel({ name: 'Basics', parent: pages[0].items[0] });
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
            {
                !currentBoard ? (
                    <MainPage callback={({ board }) => setCurrentBoard(board as BoardModel)} model={pages[1]} />
                ) : <BoardPage model={currentBoard} />
            }
        </div>
    );
};

export default observer(App);
