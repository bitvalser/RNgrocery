import React from 'react';
import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
