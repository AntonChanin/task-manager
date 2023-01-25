import BaseModel from './BaseModel';
import CardModel from './CardModel';
import tailwindcssStyles from '../assets/styles';

class GroupModel extends BaseModel {
  override __default = {
    ...super.__default,
    name: 'GroupModel',
    classList: {
      cards: 'overflow-y-auto max-h-[78vh] pr-2',
      title: 'flex place-content-between py-4',
      paper: 'w-1/4 min-w-[25%] h-max px-4  mr-2 flex-col items-start',
      paperColor: `${tailwindcssStyles['theme']['background']['primary']}`,
    },
  };

  override items: CardModel[] = [];

  constructor(options: Record<string, any>) {
    const { name, description } = options;
    super({ name, description });

    this.classList = this.__default.classList;  
  };

  addCard = (newCard: CardModel) => {
    this.addItem(newCard);
    this.addClass({
      'paperColor': `${
        this.items.length
          ? tailwindcssStyles['theme']['background']['thirdy']
          : tailwindcssStyles['theme']['background']['primary']
      }`,
    });
  };
 
};

export default GroupModel;
