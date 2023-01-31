import BaseModel from '../model/BaseModel';

type BaseProps = {
  classList: Record<string, string>,
  name: string,
  description: string,
  localization: 'ENG' | 'RU',
  items: BaseModel[]
  isEdit: boolean,
  draggable: boolean,
};

export type { BaseProps };
