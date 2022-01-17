import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Colors } from '@auteco/theme';

const Splash = ({ loader, background, onLoad }) => {

  return(
  <View style={styles.container}>
     <Image
      testID="background"
      source={background}
      style={styles.background}
      onLoad={onLoad}
      resizeMode="cover"
    />
    <Image source={loader} style={styles.loader} resizeMode="contain" />
  </View>
  )}



const styles = StyleSheet.create({
  background: {
    height: '100%',
    width: '100%',
  },
  container: {
    flex: 1,
  },
  loader: {
    bottom: 0,
    height: 64,
    position: 'absolute',
    width: '100%',
  },
  text: {
    color: Colors.WHITE_LIGHT,
    fontSize: 8 ,
    paddingLeft: 10,
    paddingTop: 50,
    position: 'absolute',
    zIndex: 4000,
  },

});

export { Splash };
