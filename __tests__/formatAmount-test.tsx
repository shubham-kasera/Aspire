/**
 * @format
 */

import 'react-native';
import {formatAmount} from '../src/utils/Helpers';

jest.mock('react-native-gesture-handler', () => {});

it('given a amount of string type, formatAmount() returns 5,000', () => {
  expect(formatAmount('5000')).toBe('5,000');
});
