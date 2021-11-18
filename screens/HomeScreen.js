import React from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Image,StatusBar,FlatList} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';


import Header from '../components/Header';
import {removeItem} from '../redux/actions';



function ListView() {
  const items=useSelector(state=>state.itemList)
  const dispatch = useDispatch();


  function renderItem({item}){
      return(
        <View style={styles.listItemContainer}>
            <Text style={styles.itemTitle} numberOfLines={1}>  {item.name} </Text>
            <TouchableOpacity onPress={() => dispatch(removeItem(item.id))}>
                 <Text style={styles.remove}> Remove </Text>
            </TouchableOpacity>

        </View>
      );
  }

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
         <FlatList
           data={items}
           keyExtractor={item => item.id.toString()}
           renderItem={item => renderItem(item)}
          />
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

  },
  listItemContainer: {
   flex: 1,
   flexDirection: 'row',
   paddingTop: 10,
   paddingBottom: 5,
   paddingRight: 5,
   justifyContent: 'space-between',
   width: '100%',
   borderBottomWidth: 0.25
 },
 itemTitle: {
    fontSize: 22,
    fontWeight: '400'
  },
  remove: {
     color:'red',
     fontSize: 18,
     fontWeight: 'bold'
  },

});

export default HomeScreen;
