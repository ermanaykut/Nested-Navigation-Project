import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'

const DodgerBlueScreen = ({navigation}) => {
    const onBack = () => {
        navigation.goBack()
    }
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Dodger Blue Screen'} onBack={onBack}/>
      <Text onPress={onBack} style={styles.text}>Welcome to DodgerBlueScreen </Text>
    </SafeAreaView>
  )
}

export default React.memo(DodgerBlueScreen)

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'dodgerblue',
       
        
    },
    text:{
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 250,
        alignSelf:'center'
    }
    
})