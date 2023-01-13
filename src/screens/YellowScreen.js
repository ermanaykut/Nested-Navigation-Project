import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'

const YellowScreen = ({navigation}) => {

  const onDodger = () =>{
        navigation.navigate('DodgerBlueScreen')
    }
    const onBack = () => {
        navigation.goBack()
    }

  return (
    <SafeAreaView style={styles.container}>
      <Header onBack={onBack}/>
      <Text onPress={onDodger} style={styles.text}>Welcome to Yellow Screen</Text>
    </SafeAreaView>
  )
}

export default React.memo(YellowScreen)

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'yellow',
       
        
    },
    text:{
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 250,
        alignSelf:'center'
    }
    
})