import React from 'react';
import Routes from '../../router/subscription_router'
import { shallow} from 'enzyme';

describe('<Routes />', () => {
    it('should not update and disable update button', () => {
        const curSubs= {chat: {type: 'chat', plan: 'basic', name: 'Basic', seats: 2}};
        const updatedSubs= {type: 'chat', plan: 'basic', name: 'Basic', seats: 2};
        const wrapper = shallow(<Routes />);
        wrapper.setState({ curSubs: curSubs, updatedSubs: curSubs, shouldUpdate: false });
        wrapper.instance().onProductChange('chat', updatedSubs);
        wrapper.update();
        expect(wrapper.state('shouldUpdate')).toBe(false);

    });

    it('should update and enable update button', () => {
        const curSubs= {chat: {type: 'chat', plan: 'basic', name: 'Basic', seats: 2}};
        const updatedSubs= {type: 'chat', plan: 'basic', name: 'Basic', seats: 3};
        const wrapper = shallow(<Routes />);
        wrapper.setState({ curSubs: curSubs, updatedSubs: curSubs, shouldUpdate: false });
        wrapper.instance().onProductChange('chat', updatedSubs);
        wrapper.update();
        expect(wrapper.state('shouldUpdate')).toBe(true);
    });
});
