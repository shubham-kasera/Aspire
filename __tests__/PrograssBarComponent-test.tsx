/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {ProgressBarComponent} from '../src/components/molecules';

jest.mock('react-native-gesture-handler', () => {});

it('renders correctly', async () => {
  const tree = renderer
    .create(
      <ProgressBarComponent
        title="This is title"
        spendings="345"
        limit="5000"
        currency="S$"
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
