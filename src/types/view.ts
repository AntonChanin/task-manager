import BoardModel from '../model/BoardModel';
import CardModel from '../model/CardModel';
import GroupModel from '../model/GroupModel';

type BoardProps = {
    model: BoardModel;
}

type CardProps = {
    model: CardModel;
};

type GroupProps = {
    callback?(): void;
    model: GroupModel;
};

export type { BoardProps, CardProps, GroupProps };
