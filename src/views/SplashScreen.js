import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  View,
} from 'react-native';
import {
  compose,
  lifecycle,
  withState,
} from 'recompose';

const styles = StyleSheet.create({
  image: {
    height: 134,
    width: 209,
  },
  wrapper: {
    alignItems: 'center',
    backgroundColor: 'black',
    bottom: 0,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
  },
  hidden: {
    display: 'none',
  },
});

const SplashScreen = ({
  visible,
}) => (
  <View style={visible ? styles.wrapper : styles.hidden}>
    <Image
      style={styles.image}
      source={require('../assets/images/logo.png')}
    />
  </View>
);

const enhanced = compose(
  withState('visible', 'setVisible', true),
);

export default enhanced(SplashScreen);
