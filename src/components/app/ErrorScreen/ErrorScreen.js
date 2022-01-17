import React from 'react';
import { Colors } from '@auteco/theme';
import { styles } from './styles';
import { header as images } from '@auteco/assets';
import { View, Text, Image, SafeAreaView, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

const ErrorScreen = ({ error }) => {
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
            Se ha presentando un error inesperado.
          </Text>
          <Text style={[styles.textCentred, styles.mainText]}>
            Por favor cierra la aplicación he intenta de nuevo.
          </Text>
          {error && (
            <Text
              testID="error-text"
              style={[styles.textCentred, styles.errorText]}
            >
              Error: {error.message}
            </Text>
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

ErrorScreen.propTypes = {
  error: PropTypes.object,
};

export { ErrorScreen };
