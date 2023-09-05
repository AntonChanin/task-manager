import React from 'react';
import renderer from 'react-test-renderer';
import {describe, expect, it } from '@jest/globals';

import AddGroupView from '../components/view/AddGroupView';
import BoardView from '../components/view/BoardView';
import CardView from '../components/view/CardView';
import GroupView from '../components/view/GroupView';
import BoardModel from '../model/BoardModel';
import CardModel from '../model/CardModel';
import GroupModel from '../model/GroupModel';
import InstanceTaskManagerStore from '../store';

const { boards } = InstanceTaskManagerStore;

describe('View snapshots:', () => {
    it('AddGroupView renders correctly', () => {
        const tree = renderer
            .create(
                <AddGroupView
                    model={
                        new GroupModel({
                            name: 'name',
                            description: 'lorem smorem',
                            parent: new BoardModel({ name: 'test' }),
                        })
                    }
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('BoardView renders correctly', () => {
        const tree = renderer
            .create(<BoardView model={boards[0]}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('CardView renders correctly', () => {
        const tree = renderer
            .create(
                <CardView
                    model={
                        new CardModel({
                            name: '',
                            description: '',
                            variant: 'thirdy',
                            parent: new GroupModel({
                                name: 'name',
                                description: 'lorem smorem',
                                parent: new BoardModel({ name: 'test' }),
                            }),
                        })
                    }
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('GroupView renders correctly', () => {
        const tree = renderer
            .create(
                <GroupView
                    model={
                        new GroupModel({
                            name: 'name',
                            description: 'lorem smorem',
                            parent: new BoardModel({ name: 'test' }),
                        })
                    }
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});