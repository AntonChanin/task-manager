import { CSSProperties, MouseEventHandler } from 'react';

/**
 * @description base param for Component
 * @param value some value for any component
 * @param style some StylesProps for any component
 */

type BaseComponentProps = {
  value: string;
  styles: Partial<StylesProps>;
}

/**
 * @description styles params for any component
 * @param style inline styles for any Component
 * @param className css-class for any Component
 */
type StylesProps = {
  style: CSSProperties | string;
  className: string;
}

/**
 * @description onClick for HTMLButtonElement
 */
type ClickButton = {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

/**
 * @description callback return void
 */
type VoidCallback = {
  callback(): void;
};

export type { BaseComponentProps, StylesProps, ClickButton, VoidCallback };