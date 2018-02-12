import { renderComponent,expect } from '../test_helper';
import App from '../../src/components/app';

describe('App', () => {
    // it('shows correct text', () => {
    //     const component = renderComponent(App);
    //     expect(component).to.contain('React simple starter');
    // });
    let component;
    beforeEach(() => {
        component = renderComponent(App);
    });
    it('shows a comment box', () => {
        expect(component.find('.comment-box')).to.exist;
    });
    it('shows a comment list', () => {
        expect(component.find('.comment-list')).to.exist;
    });
});