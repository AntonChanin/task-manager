import { CSSProperties, MouseEventHandler, DragEvent } from 'react';

import BaseModel from '../model/BaseModel';

/**
 * @description base param for Component
 * @param value some string value for any component
 */

type BaseComponentProps = {
  value: string;
  placeholder: string;
}

/**
 * @description styles params for any component
 * @param style inline styles for any Component
 * @param className css-class for any Component
 * @param variant any component variant can 'primary', 'secondary' or 'thirdy'
 * @param theme for any component can 'dark' or 'light' 
 */
type StylesProps = {
  style: CSSProperties | string;
  className: string | Record<string, string>;
  variant: Variant;
  theme: Theme;
}

/**
 * @description onClick for HTMLButtonElement
 */
type ClickButton = {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

/**
 * @description use for add drag-drop operation for UI
 * @param draggable is dragged
 * @param onDragStart div element on drag start event
 * @param onDragEnd div element on drag end event
 */
type UIDragDrop = {
  draggable: boolean;
  onDragStart(e: DragEvent<HTMLDivElement>): void;
  onDragEnd(e: DragEvent<HTMLDivElement>): void;
  onDragOver(e: DragEvent<HTMLDivElement>): void;
  onDrop(e: DragEvent<HTMLDivElement>): void;
}

/**
 * @description callback return void
 */
type VoidCallback = {
  callback(): void;
};

/**
 * @description callback return void
 */
type VoidCallbackWithProps = {
  callback<T>(props: Record<string, T>): void;
};

/**
 * @description callback with generic props return void
 */
type VoidCallbackWithWrapProps = {
  callback: <T>() => (props: Record<string, T>) => void;
};

/**
 *  @description drag-drop state for View
 */
type DragDropProps = {
  isDragging: boolean
  handleDragging(dragging: boolean): void;
  handleUpdateList(id: string, status: BaseModel): void;
}

type Variant = 'primary' | 'secondary' | 'thirdy';

type Theme = 'dark' | 'light';

export type {
  BaseComponentProps,
  StylesProps,
  ClickButton,
  DragDropProps,
  UIDragDrop,
  VoidCallback,
  VoidCallbackWithProps,
  VoidCallbackWithWrapProps,
  Variant,
  Theme,
};
