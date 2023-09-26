import createClass from '../utils/createClass';
import uuid from '../utils/uuid';
import { BaseProps } from '../types/model';

class BaseModel {
    readonly __default: BaseProps = {
        classList: { },
        name: 'BaseModel',
        description: 'lorem ipsum',
        localization: 'ENG',
        items: [],
        isEdit: true,
    };

    private __id = '';
    private __name = this.__default.name;
    private __parent?: BaseModel;
    private __localization = this.__default.localization;
    private __date: Date[] = [];

    classList = this.__default.classList;
    description = this.__default.description;
    isEdit = this.__default.isEdit;
    items: BaseModel[] = [];
    

    constructor(options: Record<string, any>) {
        const { name, description, localization = 'ENG', parent } = options;

        this.__id = uuid();
        this.__name = name;
        this.__localization = localization;
        this.__parent = parent;

        this.description = description;
        this.classList = this.__default.classList;
        this.__date.push(new Date());
    };

    protected addItem = (newItem: BaseModel) => {
        this.items = [
        ...this.items,
        newItem,
        ];
    };

    protected removeItem = (removedItem: BaseModel) => {
        this.items = this.items.filter((model) => model.id !== removedItem.id);
    };

    get date() {
        return {
            create: this.__date[0],
            exicute: this.__date[1],
        };
    }

    setExicuteDate(newDate: Date) {
        this.__date[1] = newDate;
    }

    removeItemById = (id: string) => {
        this.items = this.items.filter((model) => model.id !== id);
    }

    removeFromParent = () => {
        this.parent?.removeItemById(this.id);
    }

    addClass = (newClasses: Record<string, string>) => {
        this.classList = {
            ...this.classList,
            ...newClasses,
        };
    };

    makeClass = (classes: string[]) => createClass(classes, this.classList);

    didUpdate = () => {};

    setEdit = (newEdit: boolean) => {
        this.isEdit = newEdit;
    };

    get id() {
        return this.__id;
    };

    get parent() {
        return this.__parent;
    };

    get name() {
        return this.__name;
    };

    set name(newVName: string) {
        this.__name = newVName;
    }

    get lang() {
        return this.__localization;
    };

};

export default BaseModel;
