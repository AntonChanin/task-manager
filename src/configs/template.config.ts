import BoardModel from '../model/BoardModel';
import CardModel from '../model/CardModel';
import GroupModel from '../model/GroupModel';
import PageModel from '../model/PageModel';

export const templates: Record<string, string[][]> = {
    default: [['test'],['Queue', 'Development', 'Done']],
    next: [['max pain'],[ 'job' ]]
}

export class TemplateConfig {
    lang: 'RU' | 'ENG' = 'ENG';
    constructor(lang: 'RU' | 'ENG' = 'ENG') {
        this.lang = lang
    }

    createTemplate(template: Record<string, string[]>[], page: PageModel) {
        const [boards, groups] = template;
        Object.entries(boards).map(
            ([ k, v ]) => page.addBoard(
                new BoardModel({
                    name: v,
                    description: 'init value',
                    lang: this.lang
                })
                .addGroups(
                    groups[k].map((group: string) => new GroupModel({ name: group, parent: this }).addCard(
                        new CardModel({
                                name: '', 
                                description: `
                                    create mode 100644 postcss.config.cjs
                                    create mode 100644 src/store/index.ts
                                    create mode 100644 tailwind.config.cjs
                                `,
                                parent: this,
                                status: group,
                                priority: 2,
                            })
                        )
                    )
                )
            )
        );
    }

    namedTemplate(page: PageModel, boardName: string, template?: string) {      
        return page.addBoard(
            new BoardModel({
                name: boardName,
                description: 'init value',
                lang: this.lang
            }).makeTemplate({ template: template ?? undefined, page, ctx: this })
        )
    }

    customTemplate(pageName: string, ...name: Record<string, string[]>[]) {
        const [boards = {
            default: templates.default[0],
        }, groups = {
            default: templates.default[1]
        }] = name;
        const page = new PageModel({
            name: pageName,
            lang: this.lang
        });
        this.createTemplate([boards, groups], page);
        return page;
    }

    get default() {
        return new PageModel({
            name: 'Main',
            lang: this.lang
        }).addBoard(
            new BoardModel({
                name: 'test',
                description: 'init value',
                lang: this.lang
            })
        );
    }
}
