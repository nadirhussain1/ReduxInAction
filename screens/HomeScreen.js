import React from 'react';
import {StyleSheet,Text,View} from 'react-native';

function HomeScreen(){
  return(
    <View style={styles.container}>
      <Text>Home Screen that lists all data</Text>
    </View>
  );
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default HomeScreen;
