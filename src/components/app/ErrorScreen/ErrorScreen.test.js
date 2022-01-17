import React from 'react';
import { render } from '@testing-library/react-native';
import { ErrorScreen } from './ErrorScreen';

describe('<ErrorScreen />', () => {
  it('should match the snapshot', async () => {
    const error = { message: 'The error' };
    const { toJSON, getByTestId } = render(<ErrorScreen error={error} />);
    expect(getByTestId('error-text')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
  it('should match the snapshot', async () => {
    const error = undefined;
    const { queryByTestId } = render(<ErrorScreen error={error} />);
    expect(queryByTestId('error-text')).toBeFalsy();
  });
});
