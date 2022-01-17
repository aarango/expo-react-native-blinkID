/* eslint-disable react-native/no-raw-text */
import React from 'react';
import { View } from 'react-native'
import { shallow } from 'enzyme';
import ErrorBoundary from './ErrorBoundary';

import { errorService, userService } from '@auteco/services';

const makeWrapper = () =>
  shallow(
    <ErrorBoundary>
      <View>hello</View>
    </ErrorBoundary>,
  );

describe('ErrorBoundary Component', () => {
  let saveErrorSpy;
  let getUserSpy;
  beforeEach(() => {
    saveErrorSpy = spyOn(errorService, 'saveError');
    getUserSpy = spyOn(userService, 'getUser');
  });

  it('should render the child component if this.state.hasError is equal to false', () => {
    const ErrorBoundaryComponent = makeWrapper();
    expect(ErrorBoundaryComponent.find('View').exists()).toBeTruthy();
  });

  describe('When a JS error is caught in a child component', () => {
    beforeEach(() => {
      jest.spyOn(global.console, 'log');
    });

    it('should call errorService.saveError with stacktrace if error have stackTrace', async () => {
      getUserSpy.and.returnValue(Promise.resolve({ body: { id: 'id' } }));

      const error = {
        message: 'some message',
        data: {},
        stackTrace: 'stacktrace',
      };

      const info = {
        componentStack: {},
      };

      let setStateSpy = spyOn(
        ErrorBoundary.prototype,
        'setState',
      ).and.callThrough();

      const ErrorBoundaryComponent = makeWrapper();

      await ErrorBoundaryComponent.instance().componentDidCatch(error, info);
      ErrorBoundaryComponent.update();

      const errorBody = {
        data: error.data,
        message: error.message,
        platform: 'ios, undefined',
        stackTrace: error.stackTrace,
        userId: 'id',
      };

      expect(saveErrorSpy).toBeCalledWith(errorBody);

      expect(setStateSpy).toBeCalledWith({ hasError: true, error: errorBody });
    });

    it('should call errorService.saveError with info.ComponentStack if error not have stackTrace', async () => {
      getUserSpy.and.returnValue(Promise.reject({}));

      const error = {
        message: 'some message',
        data: {},
      };

      const info = {
        componentStack: {
          hola: 'hola',
        },
      };

      let setStateSpy = spyOn(
        ErrorBoundary.prototype,
        'setState',
      ).and.callThrough();

      const ErrorBoundaryComponent = makeWrapper();

      await ErrorBoundaryComponent.instance().componentDidCatch(error, info);
      ErrorBoundaryComponent.update();

      const errorBody = {
        data: error.data,
        message: error.message,
        platform: 'ios, undefined',
        stackTrace: info.componentStack.toString(),
      };

      expect(saveErrorSpy).toBeCalledWith(errorBody);

      expect(setStateSpy).toBeCalledWith({ hasError: true, error: errorBody });
    });

    it('should not render the child component', async () => {
      const ErrorBoundaryComponent = makeWrapper();
      await ErrorBoundaryComponent.instance().componentDidCatch(
        {},
        { componentStack: {} },
      );
      ErrorBoundaryComponent.update();

      expect(ErrorBoundaryComponent.find('h1').exists()).toBeFalsy();
    });
  });
});
