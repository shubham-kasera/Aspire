/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {CardComponent} from '../src/components/molecules';

jest.mock('react-native-gesture-handler', () => {});

it('renders correctly', () => {
  const tree = renderer
    .create(
      <CardComponent
        cardHolderName="Mark Henry"
        cardNum="5647-3411-2412-2020"
        expiryDate="12/20"
        cvv="456"
        dataVisible={true}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
