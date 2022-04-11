/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {Header} from '../src/components/molecules';

jest.mock('react-native-gesture-handler', () => {});

it('renders correctly', () => {
  const tree = renderer
    .create(<Header title="This is Header" leftIcon={false} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
