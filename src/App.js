import React from 'react';
import {
  applyMiddleware,
  createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import Logger from 'redux-logger';

import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import mySaga from './sagas';
import reducer from './reducers';
import Products from './views/Products';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(mySaga);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Products />
        </View>
      </Provider>
    );
  }
}
