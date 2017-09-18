import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  image: {
    height: 60,
    marginRight: 10,
    width: 100,
  },
  title: {
    color: '#333333',
    fontSize: 18,
    flex: 1,
  },
  price: {
    color: '#333333',
    fontSize: 18,
    marginLeft: 10,
  },
  wrapper: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
  }
});

const ProductList = ({
  data,
}) => (
  <View style={styles.wrapper}>
    <Text style={styles.title}>
      {data.title}
    </Text>
    <Text style={styles.quantity}>
      {data.quantity}x
    </Text>
    <Text style={styles.price}>
      {data.price.toFixed(2).split('.').join(',')}
    </Text>
  </View>
);

export default ProductList;
