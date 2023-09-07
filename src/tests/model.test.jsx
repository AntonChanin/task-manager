import React from 'react';
import {describe, expect, it } from '@jest/globals';

import BoardModel from '../model/BoardModel';
import CardModel from '../model/CardModel';
import GroupModel from '../model/GroupModel';
import InstanceTaskManagerStore from '../store';

const { boards } = InstanceTaskManagerStore;


const group = new GroupModel({
    name: 'name',
    description: 'lorem smorem',
    parent: boards[0],
});
const card = new CardModel({
    name: 'card',
    description: 'card description',
    variant: 'thirdy',
    parent: group,
});
boards[0].addGroup(group);
group.addCard(card);

describe('Board model snapshots:', () => {
    it('BoardModel to match object', () => {
        expect(boards[0]).toMatchObject({name: 'test'});
    });
    it('BoardModel to have property', () => {
        expect(boards[0]).toHaveProperty('name');
    });
    it('BoardModel to have property and value', () => {
        expect(boards[0]).toHaveProperty('name', 'test');
    });
    it('BoardModel to group with "name" === "name"', () => {
        expect(boards[0].items[0]).toHaveProperty('name', 'name');
    });
});

describe('Card model snapshots:', () => {
    it('CardModel to match object', () => {
        expect(card).toMatchObject({name: 'card'});
    });
    it('CardModel to have property', () => {
        expect(card).toHaveProperty('name');
    });
    it('CardModel to have property and value', () => {
        expect(card).toHaveProperty('name', 'card');
    });
});

describe('Group model snapshots:', () => {
    it('GroupModel to match object', () => {
        expect(group).toMatchObject({name: 'name'});
    });
    it('GroupModel to have property', () => {
        expect(group).toHaveProperty('name');
    });
    it('GroupModel to have property and value', () => {
        expect(group).toHaveProperty('name', 'name');
    });
    it('GroupModel to have property and value of parent', () => {
        expect(group.parent).toHaveProperty('name', 'test');
    });
    it('GroupModel to set "name" = "new name"', () => {
        group.name = 'new name'
        expect(group).toHaveProperty('name', 'new name');
    });
    it('GroupModel to set new "isEdit"', () => {
        group.setEdit(false);
        expect(group.isEdit).toEqual(false);
    });
    it('GroupModel "classList" to contain "flex"', () => {
        group.addClass({ 'flex': 'flex' });
        expect(group.classList['flex']).toEqual('flex');
    });
    it('GroupModel "removeCard" work', () => {
        group.removeCard(group.items[0]);
        expect(group.items[0]).toEqual(undefined);
    });
    it('GroupModel "removeItemById" work', () => {
        group.addCard(card);
        group.removeItemById(card.id);
        expect(group.items[0]).toEqual(undefined);
    });
    it('GroupModel "removeFromParent" work', () => {
        group.addCard(card);
        card.removeFromParent();
        expect(group.items[0]).toEqual(undefined);
    });
});