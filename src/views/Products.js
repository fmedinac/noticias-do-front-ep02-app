import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Navbar from '../components/Navbar';
import Cover from '../components/Cover';
import ProductList from '../components/ProductList';
import Invoice from '../components/Invoice';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Products = () => (
  <View style={styles.container}>
    <Navbar />
    <Cover />
    <ProductList />
    <Invoice />
  </View>
);

export default Products;
