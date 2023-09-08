import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import {describe, expect, it } from '@jest/globals';


import Article from '../components/ui/Article';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Paper from '../components/ui/Paper';
import Row from '../components/ui/Row';
import Textarea from '../components/ui/Textarea';
import Title from '../components/ui/Title';

const handleClick = jest.fn();

describe('UI snapshots:', () => {
    it('Article renders correctly with props', () => {
        const tree = renderer
            .create(<Article className="article" value="description"/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Article renders correctly no props', () => {
        const tree = renderer
            .create(<Article />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Button renders correctly', () => {
        const tree = renderer
            .create(
                <Button className="button" value="description" onClick={handleClick} />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Button renders correctly secondary', () => {
        const tree = renderer
            .create(
                <Button variant="secondary" className="button" value="description" onClick={handleClick} />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Input renders correctly', () => {
        const tree = renderer
            .create(
                <Input
                    value={'name'}
                    variant="thirdy"
                    className="input"
                    placeholder="name input"
                    callback={handleClick}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Paper renders correctly secondary', () => {
        const tree = renderer
            .create(
                <Paper
                    variant="secondary"
                    className="paper"
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Paper renders correctly thirdy', () => {
        const tree = renderer
            .create(
                <Paper
                    variant="thirdy"
                    className="paper"
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
    it('Textarea renders correctly primary', () => {
        const tree = renderer
            .create(
                <Textarea
                    value="description"
                    variant="primary"
                    placeholder=""
                    callback={handleClick}
                    className="textarea"
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Textarea renders correctly secondary', () => {
        const tree = renderer
            .create(
                <Textarea
                    value="description"
                    variant="secondary"
                    placeholder=""
                    callback={handleClick}
                    className="textarea"
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Textarea renders correctly thirdy', () => {
        const tree = renderer
            .create(
                <Textarea
                    value="description"
                    variant="thirdy"
                    placeholder=""
                    callback={handleClick}
                    className="textarea"
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Title renders correctly with props', () => {
        const tree = renderer
            .create(
                <Title value="title" className="title" />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Title renders correctly no props', () => {
        const tree = renderer
            .create(
                <Title />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});