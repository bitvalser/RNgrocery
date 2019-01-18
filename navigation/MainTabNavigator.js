import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/Home/HomeScreen';
import CategoryScreen from '../screens/Category/CategoryScreen';
import FavoritesScreen from '../screens/Favorites/FavoritesScreen';
import AccountScreen from '../screens/Account/AccountScreen';
import Colors from '../constants/Colors';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="home"
    />
  ),
  tabBarOptions: {
    activeTintColor: Colors.tintColor,
    inactiveTintColor: Colors.inactiveTintColor,
  }
};

const CategoryStack = createStackNavigator({
  Category: CategoryScreen,
});

CategoryStack.navigationOptions = {
  tabBarLabel: 'Category',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="category"
    />
  ),
  tabBarOptions: {
    activeTintColor: Colors.tintColor,
    inactiveTintColor: Colors.inactiveTintColor,
  }
};

const FavoritesStack = createStackNavigator({
  Favorites: FavoritesScreen,
});

FavoritesStack.navigationOptions = {
  tabBarLabel: 'Favorites',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="favorites"
    />
  ),
  tabBarOptions: {
    activeTintColor: Colors.tintColor,
    inactiveTintColor: Colors.inactiveTintColor,
  }
};

const AccountStack = createStackNavigator({
  Account: AccountScreen,
});

AccountStack.navigationOptions = {
  tabBarLabel: 'Account',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="account"
    />
  ),
  tabBarOptions: {
    activeTintColor: Colors.tintColor,
    inactiveTintColor: Colors.inactiveTintColor,
  }
};


export default createBottomTabNavigator({
  HomeStack,
  CategoryStack,
  FavoritesStack,
  AccountStack
});
