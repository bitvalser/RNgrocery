import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const tabIcons = {
  home: require('../assets/icons/home.png'),
  category: require('../assets/icons/category.png'),
  favorites: require('../assets/icons/favorites.png'),
  account: require('../assets/icons/account.png'),
}

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Image style={{
        ...styles.image,
        tintColor: this.props.focused ? Colors.tintColor : Colors.inactiveTintColor
      }} resizeMode="cover" source={tabIcons[this.props.name]} />
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 26,
    height: 26
  }
});