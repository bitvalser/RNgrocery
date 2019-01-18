import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <ScrollView horizontal pagingEnabled>
        <Image style={styles.image} resizeMode="cover" source={{ uri: 'https://xdlate.com/wp-content/uploads/2018/10/nomansskynext-1280-1532737707549_1280w.jpg' }}/>
        <Image style={styles.image} resizeMode="cover" source={{ uri: 'https://media.wired.com/photos/5a593a7ff11e325008172bc2/master/pass/pulsar-831502910.jpg' }}/>
        <Image style={styles.image} resizeMode="cover" source={{ uri: 'https://media2.s-nbcnews.com/j/newscms/2018_43/2481096/180628-oumuamua-al-1710_c0c91e676b30aa3ac86fb835128588c4.fit-760w.jpg' }}/>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  image: {
    width: 300,
    height: 200,
    margin: 5
  }
});
