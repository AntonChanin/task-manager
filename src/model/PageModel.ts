import BaseModel from './BaseModel';
import BoardModel from './BoardModel';

class PageModel extends BaseModel {
    override __default = {
        ...super.__default,
        name: 'PageModel',
        classList: {
            board: 'flex max-w-full overflow-x-auto overflow-y-hidden h-[95%]',
            column: 'w-1/3 flex justify-start',
            title: 'my-2 w-max text-white text-2xl',
            paper: 'flex-col bg-blue-400 p-4 font-sans w-full h-full',
        },
        items: [
            new BoardModel({
                name: 'test',
                description: 'init value',
            }),
        ],
    };

    override items: BoardModel[] = [];

    constructor(options: Record<string, any>) {
        const { name, description, parent } = options;
        super({ name, description, parent });

        this.classList = this.__default.classList;  
    };

    addBoard = (newBoard: BoardModel) => {
        this.addItem(newBoard);
        return this;
    }
};

export default PageModel;
