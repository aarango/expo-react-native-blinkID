import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NoConnection } from './NoConnection';

describe('<NoConnection />', () => {
  it('should match the snapshot', async () => {
    const retryConnection = jest.fn();

    const { toJSON, getByTestId } = render(
      <NoConnection retryConnection={retryConnection} />,
    );
    const button = getByTestId('button');
    fireEvent.press(button);
    expect(toJSON()).toMatchSnapshot();
  });
});
