import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Dimensions,
  Image,
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {
  compose,
} from 'recompose';

import selector from '../selectors/Invoice';
import InvoiceItem from './InvoiceItem';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fe2851',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 20,
  },
  buttonLabel: {
    color: '#ffffff',
    fontSize: 22,
    textAlign: 'center',
  },
  container: {
    backgroundColor: '#fafafa',
    paddingBottom: 20,
  },
  containerDecoration: {
    height: 11,
    width: Dimensions.width,
  },
  total: {
    fontSize: 22,
    textAlign: 'right',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  wrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    bottom: 0,
    left: 0,
    right: 0,
    top: 63,
    position: 'absolute',
  },
});

class Invoice extends Component {
  constructor() {
    super();

    this.state = {
      dataSource: null,
      total: 0,
    };
  }

  componentWillMount() {
    this.updateList(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.total !== this.props.total) {
      this.updateList(nextProps);
    }
  }
  
  updateList(props) {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    console.log(props);
    this.setState({
      dataSource: ds.cloneWithRows(props.cartList),
      total: props.total,
    })
  }

  render() {
    if (!this.props.isInvoiceOpen) {
      return <View />;
    }

    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) =>
              <InvoiceItem
                data={rowData}
              />
            }
          />
          <Text style={styles.total}>
            {`R$ ${this.state.total.toFixed(2).split('.').join(',')}`}
          </Text>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonLabel}>
              Pagar
            </Text>
          </TouchableHighlight>
        </View>
        <Image
          style={styles.containerDecoration}
          source={require('../assets/images/invoice-background.png')}
        />
      </View>
    );
  }
}

const enhanced = compose(
  connect(selector),
);

export default enhanced(Invoice);
