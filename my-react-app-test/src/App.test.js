import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import myForm from './myForm';
import { shallow } from 'enzyme';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('renders input-name', () => {
   let wrapper = shallow(<myForm />);
   let actual = wrapper.contains(<input />);
	  expect(actual).toBe(true);
  });

  test('renders input-email', () => {
   let wrapper = shallow(<myForm/>);
 	let actual = wrapper.contains(<input />);
  expect(actual).toBe(true);
});
