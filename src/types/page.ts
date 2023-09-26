import BoardModel from '../model/BoardModel';
import PageModel from '../model/PageModel';
import { VoidCallbackWithProps } from './common';
import { ViewWithModel } from './view';

type MainPageProps = ViewWithModel<PageModel> & VoidCallbackWithProps;

type BoardPageProps = ViewWithModel<BoardModel>

export type {
    BoardPageProps, MainPageProps, 
}