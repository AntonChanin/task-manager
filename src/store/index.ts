import { action, computed, makeObservable, observable } from 'mobx';

import BoardModel from '../model/BoardModel';
import PageModel from '../model/PageModel';
import { TemplateConfig, templates } from '../configs/template.config';

const { default: def, next } = templates;
const [ board_def, group_def ] = def;
const template = new TemplateConfig('RU');

class TaskManagerStore {
    pages: PageModel[] = [
        template.default,
        template.customTemplate('Boards', { default: board_def }, { default: group_def }),
    ];
    boards: BoardModel[] = [];
    groupIds: string[] = [];
    cardIds: string[] = [];
    private __taskCounter = 0;

    constructor() {
        makeObservable(this, {
            pages: observable,
            boards: observable,
            groupIds: observable,
            cardIds: observable,
            addBoard: action.bound,
            addCardId: action.bound,
            addGroupId: action.bound,
            removeCardId: action.bound,
            removeGroupId: action.bound,
            updateTaskCounter: action.bound,
            taskCounter: computed,
        });
        template.namedTemplate(this.pages[1], 'next', 'next');
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
  

    updateTaskCounter() {
        this.__taskCounter += 1;
    }

    get taskCounter() {
        return this.__taskCounter;
    }
};

const InstanceTaskManagerStore =  new TaskManagerStore();

InstanceTaskManagerStore.addBoard(new BoardModel({ name: 'test' }))

export default InstanceTaskManagerStore;

export type { TaskManagerStore };