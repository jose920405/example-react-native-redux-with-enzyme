import React from 'react'

import { createStore, combineReducers } from 'redux';
import jest from '../App/Reducers/JestReducer';
import configureStore from 'redux-mock-store';

import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import renderer from 'react-test-renderer';

import JestTestScreen from '../App/Containers/JestTestScreen'

// create a real store with the needed reducer(s)
const store = createStore(combineReducers({ jest }));

function updateShallowComp() {
  return shallow(
    <JestTestScreen />,
    { context: { store }, disableLifecycleMethods: false, lifecycleExperimental: true },
  );
}

function updateAllWrapperComp() {
  render = wrapper.update().dive();
}

let wrapper = updateShallowComp();
let render = wrapper.dive();

describe('Init Test', () => {

  let wrapper = updateShallowComp();

  test('>>>>> Login button Press', () => {

    let render = wrapper.dive();

    // expect(wrapper).toMatchSnapshot();

    const state1 = store.getState();
    console.log('state1 ===> ', state1);

    const textInput = render.find('TextInput').first();
    console.log(`textInput2 ====>`, textInput.getNode().props);

    textInput.first().simulate('changeText', 'My new value inside!!!')

    updateAllWrapperComp()

    const textInput2 = render.find('TextInput').first();
    console.log(`textInput2 ====>`, textInput2.getNode().props);

    const state2 = store.getState();
    console.log('state2 ===> ', state2);
  });
})