/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {Chip} from '../src/components/atoms';

jest.mock('react-native-gesture-handler', () => {});

it('renders correctly', () => {
  const tree = renderer.create(<Chip title="This is chip" />).toJSON();
  expect(tree).toMatchSnapshot();
});
