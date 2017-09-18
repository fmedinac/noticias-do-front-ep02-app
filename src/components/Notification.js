import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  compose,
  withHandlers,
} from 'recompose';

import { toggleInvoice } from '../actions';

const styles = StyleSheet.create({
  container: {
    height: 23,
    width: 32,
  },
  image: {
    height: 23,
    width: 32,
  },
  numberContainer: {
    backgroundColor: '#fe2851',
    borderRadius: 10,
    height: 20,
    position: 'absolute',
    right: -8,
    top: -8,
    width: 20,
  },
  numberText: {
    backgroundColor: 'transparent',
    color: 'white',
    flex: 1,
    fontSize: 11,
    textAlign: 'center',
    marginTop: 3,
  },
});

const Notification = ({
  onPress,
}) => (
  <TouchableOpacity
    style={styles.container}
    onPress={onPress}
  >
    <Image
      source={require('../assets/images/bill-icon.png')}
      style={styles.image}
    />
    <View style={styles.numberContainer}>
      <Text style={styles.numberText}>
        2
      </Text>
    </View>
  </TouchableOpacity>
);

const enhanced = compose(
  connect(),
  withHandlers({
    onPress: props => () => {
      props.dispatch(toggleInvoice());
    },
  }),
)
export default enhanced(Notification);
