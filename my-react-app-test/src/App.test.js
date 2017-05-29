import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MyForm from './myForm';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';

/* test1 App comp runs*/
test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

/* input test */

  test('renders inputfield name', () => {
     let wrapper = mount(<MyForm />);
     wrapper.find({ className: 'name'})
   });
   /* myform component - Email input field*/

   test('renders inputfield email', () => {
      let wrapper = mount(<MyForm />);
      wrapper.find({ className: 'email'})
       });

    /*button test */
 test('renders button', () => {
  let wrapper = shallow(<MyButton/>);
	let actual = wrapper.find(<button />).hasClass("buttonClass");
	let expected = true;
	expect(actual).toBe(expected);



});
