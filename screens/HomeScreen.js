import React from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Image,StatusBar} from 'react-native';
import {useSelector} from 'react-redux';

import Header from '../components/Header';


function ListView() {
  const items=useSelector(state=>state.itemList)

  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 20
      }}>

       {(items.length ==0 ) &&
         <Text>No item added in the list</Text>
       }

       {(items.length !==0 ) &&
         <Text>List contains {items.length} items</Text>
       }
    
    </View>
  )
}

function HomeScreen({navigation}){
  return(
    <>
  <StatusBar barStyle='light-content' />
    <View style={styles.container}>
      <Header title={'Home'} />
      <ListView />

      <View style={styles.fabContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddTask')}
          style={styles.fabButton}>

          <Image source={require('../assets/plus.jpeg')} style={styles.image}/>

        </TouchableOpacity>
      </View>
    </View>

    </>
  );
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
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
