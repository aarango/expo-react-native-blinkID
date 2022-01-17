import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Colors } from '@auteco/theme';
import PropTypes from 'prop-types';
import { loaderService } from '@auteco/services';

const Loader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    loaderService.onChange((newValue) => {
      setIsVisible(newValue);
    });
  }, []);

  return isVisible ? (
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        color={Colors.WHITE}
        animating={isVisible}
      />
    </View>
  ) : null;
};
Loader.propTypes = {
  visible: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BLACK,
    height: '100%',
    justifyContent: 'center',
    left: 0,
    opacity: 0.5,
    position: 'absolute',
    width: '100%',
    zIndex: 100,
  },
});

Loader.defaultProps = {
  visible: false,
};

export { Loader };
