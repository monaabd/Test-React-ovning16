import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('renders input-name', () => {
   let wrapper = shallow(<App />);
   const inputName = <input />;
   expect(wrapper.contains(inputName).toBe(true);
  });
