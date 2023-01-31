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

  constructor(options: Record<string, any>) {
    const { name, description, parent } = options;
    super({ name, description, parent });

    this.classList = this.__default.classList;  
  };

  addCard = (newCard: CardModel) => {
    this.addItem(newCard);
  };

  removeCard = (removedCard: CardModel) => {
    this.removeItem(removedCard);
  }
 
};

export default GroupModel;
