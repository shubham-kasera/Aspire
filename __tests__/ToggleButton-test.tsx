/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {ToggleButton} from '../src/components/atoms';

jest.mock('react-native-gesture-handler', () => {});

it('renders correctly', () => {
  const tree = renderer
    .create(<ToggleButton title="This is chip" icon="visibility" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
