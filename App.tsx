import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>Hello World</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  textColor:{
    color:'black',
    fontSize:32,
    fontFamily:'Quick Peach'
  }
})

export default App