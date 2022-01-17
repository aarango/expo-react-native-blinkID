/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Platform } from 'react-native';
import { errorService, userService } from '@auteco/services';
import { ErrorScreen } from '../ErrorScreen';
export default class ErrorBoundary extends Component {
  state = { hasError: false, error: undefined };

  async componentDidCatch({ message, data, stackTrace }, info) {
    const OS = Platform.OS === 'ios' ? 'ios' : 'android';
    const platform = `${OS}, ${Platform.Version}`;
    const error = {
      message,
      data,
      platform,
      stackTrace: stackTrace || info.componentStack.toString(),
    };

    try {
      const { body } = await userService.getUser();
      error.userId = body.id;
    } catch (error) {
      error.userId = 'No login';
    }

    errorService.saveError(error);
    this.setState({ hasError: true, error });
  }

  render() {
    return this.state.hasError ? (
      <ErrorScreen error={this.state.error} />
    ) : (
      this.props.children
    );
  }
}
