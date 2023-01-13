import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

const PurpleScreen = ({navigation}) => {
   
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={() => navigation.navigate('GreenScreen')} style={styles.text}>Welcome to Purple Screen</Text>
    </SafeAreaView>
  )
}

export default React.memo(PurpleScreen)

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: 'purple',
      justifyContent: 'center',
      alignItems: 'center'
    },
    text:{
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf:'center'
    }
    
})