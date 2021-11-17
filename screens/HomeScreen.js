import React from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Image} from 'react-native';

function HomeScreen({navigation}){
  return(
    <View style={styles.container}>
      <View style={styles.fabContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddTask')}
          style={styles.fabButton}>

          <Image source={require('../assets/plus.jpeg')} style={styles.image}/>

        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },

  fabContainer:{
    flexDirection:'row',
    justifyContent:'center',
    position:'absolute',
    right:10,
    bottom:20,
  },

  fabButton:{
    width:70,
    height:70,
    backgroundColor:'blue',
    borderRadius:35,
    alignItems:'center',
    justifyContent:'center',
  },

  image:{
    width:70,
    height:70,

  }

});

export default HomeScreen;
