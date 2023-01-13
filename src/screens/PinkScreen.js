import React from 'react'
import { SafeAreaView, StyleSheet, Text,  } from 'react-native'

const PinkScreen = ({navigation}) => {
  
  const onNavigate = () => {
    navigation.navigate('PurpleScreen')
}
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={onNavigate} style={styles.text}>Welcome to Pink Screen</Text>
    </SafeAreaView>
  )
}

export default React.memo(PinkScreen)

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: 'pink',
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