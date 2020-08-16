import React from 'react';
import { mount ,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import Demo from '../src/demo';

// import { expect } from 'chai';

configure({
    adapter: new Adapter(),
  });
describe('UI test #demo',()=>{
    it('should have title',()=>{
        const wrapper=mount(<Demo />);
        const title=wrapper.find('h1');
        expect(title).toHaveLength(1);
        expect(title.text()).toBe('this  is a demo')
    });
    it('shold add 1 when click button',()=>{
        const wrapper=mount(<Demo />);
        const counter=wrapper.find('.counter');
        const v1=parseInt(counter.text());
        wrapper.find('button').simulate('click');
        const v2=parseInt(counter.text());
        // expect(title).toHaveLength(1);
        expect(v2).toBe(v1 + 1) 
    })
    it('shold change when input number',()=>{
        const wrapper=mount(<Demo />);
        const counter=wrapper.find('.counter');
        wrapper.find('input').simulate('change',{
            target:{
                value:"5"
            }
        });
        expect(counter.text()).toBe("5")
    })
    it('shold change when props change',()=>{
        const wrapper=mount(<Demo title="Demo" valeu={5}/>);
        sinon.spy(Demo.prototype,'UNSAFE_componentWillReceiveProps');
        const title=wrapper.find('h1');
        wrapper.setProps({
            title:"Demo2"
        })
        expect(title.text()).toBe("Demo2");
        const callCount = Demo.prototype.UNSAFE_componentWillReceiveProps.callCount
        expect(callCount).toBe(1);
    })
})