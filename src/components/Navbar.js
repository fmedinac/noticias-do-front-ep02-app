import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Invoice from './Invoice';

import Notification from './Notification';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    borderBottomColor: '#999999',
    borderBottomWidth: 1,
    height: 64,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 22,
  },
  titleContainer: {
    flex: 1,
  },
  notificationContainer: {
    bottom: 12,
    position: 'absolute',
    right: 20,
  },
  title: {
    color: '#333333',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '400',
  },
  subtitle: {
    color: '#666666',
    flex: 1,
    fontSize: 11,
    textAlign: 'center',
  },
});

const rightButtonConfig = {
  title: 'Next',
  handler: () => alert('hello!'),
};

const titleConfig = {
  title: 'FrangÓ Bar',
};

const Navbar = () => (
  <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>
        FrangÓ Bar
      </Text>
      <Text style={styles.subtitle}>
        Cardápio
      </Text>
    </View>
    <View style={styles.notificationContainer}>
      <Notification />
    </View>
  </View>
);

export default Navbar;
