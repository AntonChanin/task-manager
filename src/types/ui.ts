import { BaseComponentProps, ClickButton, StylesProps, VoidCallback } from './common';

type TArticle = BaseComponentProps & StylesProps;

type TPaper = StylesProps;

type TButton = BaseComponentProps & StylesProps & ClickButton & VoidCallback;

export type { TArticle, TButton, TPaper };
