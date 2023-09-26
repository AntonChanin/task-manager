import BaseModel from './BaseModel';
import CardModel from './CardModel';

class GroupModel extends BaseModel {
    override __default = {
        ...super.__default,
        name: 'GroupModel',
        classList: {
            button: 'flex',
            cards: 'overflow-y-auto max-h-[78vh] pr-2',
            title: 'flex place-content-between py-4',
            paper: 'w-1/4 min-w-[25%] h-max px-4 mr-2 flex-col items-start',
        },
    };

    override items: CardModel[] = [];
    
    private __order = 0;

    constructor(options: Record<string, any>) {
        const { name, description, parent } = options;
        super({ name, description, parent });

        this.classList = this.__default.classList;
        this.__order = parent?.items?.length;
    };

    addCard = (newCard: CardModel) => {
        this.addItem(newCard);
        return this;
    };

    removeCard = (removedCard: CardModel) => {
        this.removeItem(removedCard);
    }
    
    get order() {
        return this.__order;
    }
};

export default GroupModel;
