import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import PinkScreen from "./src/screens/PinkScreen";
import PurpleScreen from "./src/screens/PurpleScreen";
import GreenScreen from "./src/screens/GreenScreen";
import BlueScreen from "./src/screens/BlueScreen";
import YellowScreen from "./src/screens/YellowScreen";
import DodgerBlueScreen from "./src/screens/DodgerBlueScreen";
import BrownScreen from "./src/screens/BrownScreen";
import {colors} from './src/utils/colors'
import { Image } from 'react-native';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const TabScreens = () => {
  return(
  <Tab.Navigator screenOptions={({route}) => ({
    tabBarIcon: ({focused}) => {
      let icon;
      
      if (route.name === 'DodgerBlueScreen') {
        icon = focused
        ? require('./src/assets/blueeye.png')
        : require('./src/assets/eye.png');
      }  else if (route.name === 'BrownScreen') {
        icon = focused
        ? require('./src/assets/blueeye.png')
        : require('./src/assets/eye.png');
      } 
      // You can return any component that you like here!
      return <Image style={{width: 35, height: 35}} source={icon} />
    },
    tabBarActiveBackgroundColor: colors.aqua,
    tabBarInactiveBackgroundColor:'lightgrey',
    headerShown: false,
    tabBarShowLabel: true,
  })}>
    <Tab.Screen name="DodgerBlueScreen" component={DodgerBlueScreen} />
    <Tab.Screen name="BrownScreen" component={BrownScreen} />
  </Tab.Navigator>
  )
}

const StackScreens = () => {
  return(
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="GreenScreen" component={GreenScreen} />
      <Stack.Screen name="BlueScreen" component={BlueScreen} />
      <Stack.Screen name="YellowScreen" component={YellowScreen} />

    </Stack.Navigator>
  )
}

const App = () => {

  return (
    <NavigationContainer>
      <Drawer.Navigator 
      initialRouteName="PinkScreen"
      screenOptions={{
        drawerStyle:{
          backgroundColor: colors.lightgrey
        } ,
        drawerActiveTintColor: colors.orange ,
        headerTintColor: colors.white,
        headerStyle:{
          backgroundColor:colors.lightgrey
        },
        drawerContentStyle:{}

      }}
      >
        <Drawer.Screen name="PinkScreen" component={PinkScreen} />
        <Drawer.Screen name="PurpleScreen" component={PurpleScreen} />
        <Drawer.Screen name="Stack Screen" component={StackScreens} />
        <Drawer.Screen name= "Tab Screen" component={TabScreens} />
      </Drawer.Navigator>
       
    </NavigationContainer>
  );
}

export default App;