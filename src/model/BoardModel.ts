import { TemplateConfig, templates } from '../configs/template.config';
import InstanceTaskManagerStore from '../store';
import BaseModel from './BaseModel';
import GroupModel from './GroupModel';
import PageModel from './PageModel';

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
            }),
        ],
    };

    override items: GroupModel[] = [];

    template = 'default'

    constructor(options: Record<string, any>) {
        const { name, description, parent, template = 'default' } = options;
        super({ name, description, parent });

        this.classList = this.__default.classList; 
        this.template = template;
    };

    addGroup = (newGroup: GroupModel) => {
        this.addItem(newGroup);
        return this;
    }

    addGroups = (newGroups: GroupModel[]) => {
        this.items = [...this.items, ...newGroups];
        return this;
    }

    
    makeTemplate = (props: { template?: string, page: PageModel, ctx: TemplateConfig }) => {
        const { template = this.template, page, ctx } = props;
        ctx.createTemplate([{
            [template]: templates[template][0]
        }, { [template]: templates[template][1] }], page);
        return this;
    }
};

export default BoardModel;
