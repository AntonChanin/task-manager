import { BaseProps } from '../types/model';
import uuid from '../utils/uuid';

class BaseModel {

  readonly __default: BaseProps = {
    classList: { },
    name: 'BaseModel',
    description: 'lorem ipsum',
    localization: 'ENG',
    items: [],
  };

  private __id = '';
  private __name = this.__default.name;
  private __localization = this.__default.localization;

  classList = this.__default.classList;
  description = this.__default.description;
  items: BaseModel[] = [];

  constructor(options: Record<string, any>) {
    const { name, description, localization = 'ENG' } = options;

    this.__id = uuid();
    this.__name = name;
    this.__localization = localization;

    this.description = description;
    this.classList = this.__default.classList;
  };

  protected addItem = (newItem: BaseModel) => {
    this.items = [
      ...this.items,
      newItem,
    ];
  };

  addClass = (newClasses: Record<string, string>) => {
    this.classList = {
      ...this.classList,
      ...newClasses,
    };
  };

  makeClass = (classes: string[]) => {
    let className = '';
    classes.forEach((item) => className = `${className} ${this.classList[item]}`);
    return className.replace('undefined', '').trimStart().trimEnd();
  };

  get id() {
    return this.__id;
  };

  get name() {
    return this.__name;
  };

  get lang() {
    return this.__localization;
  };

};

export default BaseModel;
