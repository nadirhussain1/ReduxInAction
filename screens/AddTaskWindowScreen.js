import React , {useState} from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Image,TextInput} from 'react-native';
import {useDispatch} from 'react-redux'
import {addItem} from '../redux/actions';

function AddTaskWindowScreen({navigation}){
  const[value, setValue] = useState('')
  const dispatch=useDispatch()

  const onSaveNote = value =>{
     dispatch(addItem(value));

     navigation.navigate('Home');
  }

  return(

    <View style={styles.container}>

        <View style={styles.closeButtonContainer}>
           <TouchableOpacity
             style={styles.closeButton}
              onPress={() => navigation.goBack()}>

                <Image source={require('../assets/close.png')} style={styles.image} />
           </TouchableOpacity>
       </View>



        <View style={styles.modalContainer}>

             <Text style={{ color: '#444', fontSize: 20 }}>
                What do you want to do?
             </Text>

           <TextInput
              style={styles.input}
              numberOfLines={1}
              clearButtonMode='while-editing'
              onChangeText={value=>setValue(value)}
            />

          <TouchableOpacity
            onPress={() => onSaveNote(value)}>

              <Text style={styles.done}> DONE </Text>
          </TouchableOpacity>


        </View>
      </View>


  );
}

const styles=StyleSheet.create({
 container: {
   borderTopLeftRadius: 10,
   borderTopRightRadius: 10,
   justifyContent: 'flex-end',
   flexDirection: 'row',
   height: '30%',
   width: '100%',
   position: 'absolute',
   bottom: 0,
   right: 0,
   backgroundColor: '#fff'
 },

 modalContainer: {
   flex:1,
   flexDirection:'column',
   justifyContent: 'center',
   alignItems: 'center',
   marginTop:50,
 },

 closeButtonContainer: {
   position: 'absolute',
   alignItems: 'flex-end',
   right: 10
 },
 closeButton: {
   backgroundColor: '#d3d3d3',
   borderRadius: 20,
   width: 40,
   height: 40,
   top: 10,
   alignItems: 'center',
   justifyContent: 'center'
 },
 image:{
   width:40,
   height:40,
 },
 input:{
   height: 50,
   width: 200,
   padding: 5,
   borderColor: 'gray',
   borderBottomWidth: 1
 },

 done:{
   width: 300,
   textAlign:'center',
   paddingVertical:8,
   marginTop:24,
   backgroundColor:'black',
   color:'white',
   justifyContent:'center',
   fontSize:16,

 },


});

export default AddTaskWindowScreen;
