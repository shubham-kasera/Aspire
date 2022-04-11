/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {IconListItem} from '../src/components/molecules';

jest.mock('react-native-gesture-handler', () => {});

it('renders correctly', () => {
  const tree = renderer
    .create(
      <IconListItem
        title="This is title"
        desc="This is description"
        logo={require('../src/assets/images/Topup.png')}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
