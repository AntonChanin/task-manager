import BaseModel from './BaseModel';
import { Variant } from '../types/common';
import { BaseProps } from '../types/model';

class CardModel extends BaseModel {
  override  __default: BaseProps =  {
    ...super.__default,
    name: 'CardModel',
    classList: {
      editButton: 'opacity-0 flex ml-auto hover:opacity-100 absolute top-0 right-0',
    },
  };

  variant: Variant = 'secondary';

  constructor(options: Record<string, any>) {
    const { name, description, draggable, parent, variant } = options;
    super({ name, description, draggable, parent });

    this.variant = variant;
    this.classList = this.__default.classList;
  };
};

export default CardModel;
