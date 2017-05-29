import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MyForm from './myForm';
import { shallow } from 'enzyme';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('renders input-name', () => {
   let wrapper = shallow(<MyForm />);
   let actual = wrapper.contains(<input placeholder="name" />);
   let expected = true;
   expect(actual).toBe(expected);
  });

  test('renders input-email', () => {
   let wrapper = shallow(<MyForm />);
   let actual = wrapper.contains(<input placeholder="email" />);
   let expected = true;
  	expect(actual).toBe(expected);
});
