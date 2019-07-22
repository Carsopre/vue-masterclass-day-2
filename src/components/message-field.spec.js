import Vue from 'vue'
import { mount } from '@vue/test-utils';
import MessageField from './message-field';

it('emits the message when pressing enter', () => {
    // 1. set test data
    const wrapper = mount(MessageField);
    const testValue = "dummyTest";
    const expectedEmit = "submit";
    
    // 2. Set expectations
    wrapper.setData({text: testValue});
    
    // 3. Run test
    wrapper.find('form').trigger('submit')
    
    // 4. verify final expectations.
    expect(wrapper.emitted(expectedEmit)).toBeTruthy();
    expect(wrapper.emitted(expectedEmit)).toEqual([[testValue]]);
});

it('emits the message when onSubmit', () => {
    // 1. set test data
    const wrapper = mount(MessageField);
    const testValue = "dummyTest";
    const expectedEmit = "submit";
    
    // 2. Set expectations
    wrapper.setData({text: testValue});
    
    // 3. Run test
    wrapper.vm.onSubmit();
    
    // 4. verify final expectations.
    expect(wrapper.emitted(expectedEmit)).toBeTruthy();
    expect(wrapper.emitted(expectedEmit)).toEqual([[testValue]]);
});

it('allows you to add emojis', () => {

});

it('clears the text after it has been submitted', () => {
    // 1. set test data
    const wrapper = mount(MessageField);
    const testValue = "dummyTest";
    const expectedEmit = "submit";
    
    // 2. Set expectations
    wrapper.setData({text: testValue});
    
    // 3. Run test
    wrapper.find('form').trigger('submit')
    
    // 4. verify final expectations.
    expect(wrapper.emitted(expectedEmit)).toBeTruthy();
});
