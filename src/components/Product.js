import React from 'react';
import { connect } from 'react-redux';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  compose,
  withHandlers,
} from 'recompose';

import { addProduct } from '../actions';

const styles = StyleSheet.create({
  image: {
    backgroundColor: '#eeeeee',
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
  onPress,
}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.wrapper}>
      <Image
        style={styles.image}
        source={{
          uri: data.image,
        }}
      />
      <Text style={styles.title}>
        {data.title}
      </Text>
      <Text style={styles.price}>
        {data.price.toFixed(2).split('.').join(',')}
      </Text>
    </View>
  </TouchableOpacity>
);

const enhanced = compose(
  connect(),
  withHandlers({
    onPress: props => () => {
      props.dispatch(addProduct(props.data.sku));
    }
  })
)
export default enhanced(ProductList);
