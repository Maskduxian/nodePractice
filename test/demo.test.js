import React from 'react';
import { mount ,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Demo from '../src/demo';

configure({
    adapter: new Adapter(),
  });
describe('UI test #demo',()=>{
    it('should have title',()=>{
        const wrapper=mount(<Demo />);
        const title=wrapper.find('h1');
        expect(title).toHaveLength(1)
    })
})