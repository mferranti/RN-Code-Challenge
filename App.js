/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './views/HomeScreen';
import CocktailScreen from './views/CocktailScreen';
import reducer from './reducers/root';

const client = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1',
  responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Cocktail: {
      screen: CocktailScreen,
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#4ebcd1',
      },
      headerTintColor: '#fff',
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
