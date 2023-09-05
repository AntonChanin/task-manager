import React from 'react';
import renderer from 'react-test-renderer';
import {describe, expect, it } from '@jest/globals';

import Article from '../components/ui/Article';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Paper from '../components/ui/Paper';
import Row from '../components/ui/Row';
import Textarea from '../components/ui/Textarea';
import Title from '../components/ui/Title';

describe('UI snapshots:', () => {
    it('Article renders correctly', () => {
        const tree = renderer
            .create(<Article value="description"/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Button renders correctly', () => {
        const tree = renderer
            .create(<Button value={'description'} onClick={() => {}} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Input renders correctly', () => {
        const tree = renderer
            .create(
                <Input
                    value={'name'}
                    variant="thirdy"
                    placeholder={''}
                    callback={() => {}}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Paper renders correctly', () => {
        const tree = renderer
            .create(
                <Paper
                    variant="secondary"
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Row renders correctly', () => {
        const tree = renderer
            .create(
                <Row
                    variant="secondary"
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Textarea renders correctly', () => {
        const tree = renderer
            .create(
                <Textarea
                    value="description"
                    variant="thirdy"
                    placeholder=""
                    callback={() => {}}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Title renders correctly', () => {
        const tree = renderer
            .create(
                <Title value="title" />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});