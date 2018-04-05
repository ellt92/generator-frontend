import React from 'react';
import { shallow } from 'enzyme';

import <%= classname %> from '../';

test('<%= classname %> has own class attribute', () => {
  const component = shallow(<<%= classname %> />);

  expect(component.find('.<%= classname %>')).toHaveLength(1);
});
