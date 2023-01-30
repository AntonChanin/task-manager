import { action, makeObservable, observable } from 'mobx';

import BoardModel from '../model/BoardModel';

class TaskManagerStore {
  boards: BoardModel[] = [];
  groupIds: string[] = [];
  cardIds: string[] = [];

  constructor() {
    makeObservable(this, {
      boards: observable,
      groupIds: observable,
      cardIds: observable,
      addBoard: action.bound,
      addCardId: action.bound,
      addGroupId: action.bound,
      removeCardId: action.bound,
      removeGroupId: action.bound,
    });
  };

  addBoard(newBoard: BoardModel) {
    this.boards = [
      ...this.boards,
      newBoard,
    ];
  };
  
  addCardId(newCardId: string) {
    this.cardIds = [
      ...this.cardIds,
      newCardId,
    ];
  }; 

  addGroupId(newGroupId: string) {
    this.groupIds = [
      ...this.groupIds,
      newGroupId,
    ];
  };

  removeCardId(removeCardId: string) {
    this.cardIds = this.cardIds.filter((cardId) => cardId !== removeCardId);
  };

  removeGroupId(removeGroupId: string) {
    this.groupIds = this.groupIds.filter((groupId) => groupId !== removeGroupId);
  };
  
};

const InstanceTaskManagerStore =  new TaskManagerStore();

InstanceTaskManagerStore.addBoard(new BoardModel({ name: 'test' }))

export default InstanceTaskManagerStore;
