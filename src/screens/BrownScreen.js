import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import { colors } from '../utils/colors'

const BrownScreen = ({navigation}) => {
   
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={() => navigation.goBack()} style={styles.text}>Welcome to Brown Screen</Text>
    </SafeAreaView>
  )
}

export default React.memo(BrownScreen)

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: colors.brown,
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