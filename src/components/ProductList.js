import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { getProductList } from '../actions';
import Product from './Product';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  }
});

class ProductList extends Component {
  constructor() {
    super();

    this.state = {
      dataSource: null,
    };
  }
  
  componentWillMount() {
    this.props.dispatch(getProductList());
  }
  
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.productList !== this.state.productList) {
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({
        dataSource: ds.cloneWithRows(nextProps.productList),
      })
    }
  }
  
  render() {
    return (
      <View style={{flex: 1}}>
        { this.state.dataSource &&
          <ListView
            dataSource={this.state.dataSource}
            style={styles.wrapper}
            renderRow={(rowData) =>
              <Product
                data={rowData}
              />
            }
          />
        }
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    productList: state.productListData,
  }
}

export default connect(mapStateToProps)(ProductList);
