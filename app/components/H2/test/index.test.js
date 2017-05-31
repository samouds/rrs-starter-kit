import React from 'react';
import { shallow } from 'enzyme';
import H2 from 'components/H2';

describe('H2 component', () => {

  it('H2 should have the appropriate text and props', () => {
    const h2 = shallow(
      <H2 className="titleClass">H2 label</H2>
    );

    expect(h2.is('.titleClass')).toBe(true);
    expect(h2.text()).toEqual('H2 label');
  });

});
