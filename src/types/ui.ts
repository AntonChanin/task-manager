import {
    BaseComponentProps,
    ClickButton,
    StylesProps,
    UIDragDrop,
    VoidCallback,
    VoidCallbackWithProps,
} from './common';

type ArticleProps = BaseComponentProps & StylesProps;

type ButtonProps = BaseComponentProps & StylesProps & ClickButton & VoidCallback;

type PaperProps = StylesProps & UIDragDrop;

type EditProps = BaseComponentProps & StylesProps & VoidCallbackWithProps;

export type { ArticleProps, ButtonProps, PaperProps, EditProps };
