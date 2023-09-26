import BaseModel from './BaseModel';
import { Variant } from '../types/common';
import { BaseProps } from '../types/model';

class CardModel extends BaseModel {
    status = 0;
    statusName = '';
    priority = 0;

    override  __default: BaseProps =  {
        ...super.__default,
        name: 'CardModel',
        classList: {
            tag: 'p-1 my-0',
            'priority-0': 'bg-pink-300',
            'priority-1': 'bg-fuchsia-300',
            'priority-2': 'bg-green-500',
            'priority-3': 'bg-blue-400',
            'priority-4': 'bg-orange-400',
            'priority-5': 'bg-red-950',
            editButton: 'opacity-0 flex ml-auto hover:opacity-100 absolute top-0 right-0',
        },
    };

    variant: Variant = 'secondary';

    constructor(options: Record<string, any>) {
        const { name, description, parent, variant, status, priority, order } = options;
        super({ name, description, parent });

        this.variant = variant;
        this.classList = this.__default.classList;
        if (typeof status === 'string') this.statusName = status;
        this.status = status;
        this.priority = priority;
    };
};

export default CardModel;
