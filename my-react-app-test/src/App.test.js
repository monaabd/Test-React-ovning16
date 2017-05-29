import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import myForm from './myForm';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('renders input-name', () => {
   let wrapper = shallow(<myForm />);
   let actual = wrapper.contains(<input />);
   let expected = true;
	  expect(actual).toBe(expected);
  });
