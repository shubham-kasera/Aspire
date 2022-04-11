/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {ButtonComponent} from '../src/components/atoms';

jest.mock('react-native-gesture-handler', () => {});

it('renders correctly', () => {
  const tree = renderer
    .create(<ButtonComponent title="This is ButtonComponent" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
