import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import ReactTestUtils from 'react-addons-test-utils'

describe('Footer', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Footer />, div);
    });

    it('renders a div with correct component', () => {
        const renderer = ReactTestUtils.createRenderer();
        renderer.render(<Footer text='TEST'/>);
        const result = renderer.getRenderOutput();

        expect(result.type).toBe('div');
        expect(result.props.children).toEqual('TEST');
    });
})