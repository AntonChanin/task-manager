import { BaseComponentProps, ClickButton, StylesProps, VoidCallback, VoidCallbackWithProps } from './common';

type ArticleProps = BaseComponentProps & StylesProps;

type ButtonProps = BaseComponentProps & StylesProps & ClickButton & VoidCallback & React.ButtonHTMLAttributes<HTMLButtonElement>;

type PaperProps = StylesProps;

type EditProps = BaseComponentProps & StylesProps & VoidCallbackWithProps;

export type { ArticleProps, ButtonProps, PaperProps, EditProps };
