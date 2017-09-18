import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  address: {
    color: '#cccccc',
    fontSize: 16,
    textAlign: 'center',
  },
  cover: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  metaContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    height: 200,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 48,
    textAlign: 'center',
  },
  wrapper: {
    height: 200,
  }
})

const Cover = () => (
  <View style={styles.wrapper}>
    <Image
      style={styles.cover}
      source={{
        uri: "https://abrilvejasp.files.wordpress.com/2016/11/aconchego-carioca-e-frango-jpg.jpeg?quality=70&strip=info&w=928"
      }}
    />
    <View style={styles.metaContainer}>
      <Text style={styles.title}>
        FrangÓ Bar
      </Text>
      <Text style={styles.address}>
        {'Largo da Matriz\nFreguesia do Ó\nSão Paulo'}
      </Text>
    </View>
  </View>
);

export default Cover;
