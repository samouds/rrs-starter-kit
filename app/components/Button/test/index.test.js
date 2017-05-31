import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Button from 'components/Button';

describe('Button component', () => {

  it('Button should have the appropriate text and props', () => {
    const button = shallow(
      <Button className="buttonClass">Button label</Button>
    );
    expect(button.is('.buttonClass')).toBe(true);
    expect(button.text()).toEqual('Button label');
  });

  it('Button should call onClick props when clicked', () => {
    const spy = sinon.spy();
    const button = shallow(
      <Button className="buttonClass" onClick={ spy }>Button label</Button>
    );
    button.simulate('click', { preventDefault() {} });
    expect(spy.calledOnce).toBe(true);
  });

});
