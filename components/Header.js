import React from 'react'
import { View, Text, StyleSheet } from 'react-native'



function Header(props){
  const{title} = props;

  return(
     <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
     </View>
  )
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    paddingVertical: 10
  },
  text: {
    color: '#fff',
    fontSize: 22,
    textAlign:'center',
    fontWeight: '400'
  }
})



export default Header
