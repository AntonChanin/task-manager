import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import {describe, expect, it } from '@jest/globals';

import AddGroupView from '../components/view/AddGroupView';
import BoardView from '../components/view/BoardView';
import CardView from '../components/view/CardView';
import GroupView from '../components/view/GroupView';
import BoardModel from '../model/BoardModel';
import CardModel from '../model/CardModel';
import GroupModel from '../model/GroupModel';
import InstanceTaskManagerStore from '../store';
import localization from '../assets/localization';

const { boards } = InstanceTaskManagerStore;
const group = new GroupModel({
    name: 'name',
    description: 'lorem smorem',
    parent: new BoardModel({ name: 'test' }),
});
const card = new CardModel({
    name: '',
    description: '',
    variant: 'thirdy',
    parent: group,
});
group.addCard(card);
boards[0].addGroup(group);

describe('View snapshots:', () => {
    it('AddGroupView renders correctly', () => { 
        const tree = renderer
            .create(
                <AddGroupView
                    model={group}
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
                    model={card}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('GroupView renders correctly', () => {
        const tree = renderer
            .create(
                <GroupView
                    model={group}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('BoardView "onClick" correctly', () => {
    const { queryByText } = render(<BoardView model={boards[0]}/>);
    const button = queryByText(`+ ${localization.ENG.addAnotherList}`);
    expect(fireEvent.click(button));
});
describe('GroupView "onClick" correctly', () => {
    const { getAllByRole } = render(<GroupView model={group}/>);
    const buttons = getAllByRole('button');
    expect(!buttons.map((button) => (fireEvent.click(button))).includes(false));
});
describe('GroupView "onClick" use "removeFromParent" correctly', () => {
    const oldName = group.name;
    group.name = '';
    const { getAllByRole } = render(<GroupView model={group}/>);
    const buttons = getAllByRole('button');
    expect(!buttons.map((button) => (fireEvent.click(button))).includes(false));
    group.name = oldName;
});
describe('GroupView "onChange" correctly', () => {
    const { queryAllByPlaceholderText } = render(<GroupView model={group}/>);
    const [ input ] = queryAllByPlaceholderText(`${localization.ENG.editGroupTitlePlaceholder}`);
    expect(fireEvent.change(input, { target: { value: 'Nice work!' } }));
});
describe('CardView "onClick" use "removeFromParent" correctly', () => {
    const { getAllByRole } = render(<CardView model={card}/>);
    const buttons = getAllByRole('button');
    expect(!buttons.map((button) => (fireEvent.click(button))).includes(false));
});
describe('CardView "onClick" correctly', () => {
    card.description = 'over text'
    const { getAllByRole } = render(<CardView model={card}/>);
    const buttons = getAllByRole('button');
    expect(!buttons.map((button) => (fireEvent.click(button))).includes(false));
    card.description = '';
});
describe('CardView "onChange" correctly', () => {
    const { queryAllByPlaceholderText } = render(<CardView model={group}/>);
    const [ textarea ] = queryAllByPlaceholderText(`${localization.ENG.editCardPlaceholder}`);
    expect(fireEvent.change(textarea, { target: { value: 'Nice work!' } }));
});