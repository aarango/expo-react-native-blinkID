import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Colors } from '@auteco/theme';
import { styles } from './styles';
import { header as images } from '@auteco/assets';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const NoConnection = ({ retryConnection, isInternetReachable }) => {
  const [buttonEnabled, setButtonEnabled] = useState(true);

  const setConnectionState = async () => {
    setButtonEnabled(false);
    if (await isInternetReachable()) {
      retryConnection();
    } else {
      setButtonEnabled(true);
    }
  };
  const disableButtonStyle = buttonEnabled
    ? {}
    : { backgroundColor: Colors.GRAY_LIGHT };
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" backgroundColor={Colors.WHITE} />
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <Image
              style={styles.image}
              source={images.logo}
              resizeMode="contain"
            ></Image>
          </View>
        </View>
        <View
          style={[styles.container, styles.verticallyCentered]}
          testID="NoConnection"
        >
          <Text style={[styles.textCentred, styles.title]}>Discúlpanos</Text>
          <Text style={[styles.textCentred, styles.mainText]}>
            Se presento un inconveniente tecnico.
          </Text>
          <Text style={[styles.textCentred, styles.mainText]}>
            Comprueba tu conexión a internet e intenta de nuevo.
          </Text>
          <TouchableHighlight
            onPress={buttonEnabled ? setConnectionState : () => {}}
            style={[styles.button, disableButtonStyle]}
            testID="button"
          >
            <Text style={[styles.textCentred, styles.buttonText]}>
              Reintentar
            </Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </>
  );
};

NoConnection.propTypes = {
  retryConnection: PropTypes.func,
  isInternetReachable: PropTypes.func,
};

export { NoConnection };
