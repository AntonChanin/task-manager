import BaseModel from './BaseModel';
import GroupModel from './GroupModel';

class BoardModel extends BaseModel {
  override __default = {
    ...super.__default,
    name: 'BoardModel',
    classList: {
      group: 'flex max-w-full overflow-x-auto overflow-y-hidden h-[95%]',
      title: 'my-2 w-max text-white text-2xl',
      paper: 'flex-col bg-blue-400 p-4 font-sans w-full h-full',
    },
    items: [
      new GroupModel({
        name: '',
        description: 'init value',
      })
    ],
  };

  override items: GroupModel[] = [];

  constructor(options: Record<string, any>) {
    const { name, description, parent } = options;
    super({ name, description, parent });

    this.classList = this.__default.classList;  
  };

  addGroup = (newGroup: GroupModel) => {
    this.addItem(newGroup);
  }
};

export default BoardModel;
