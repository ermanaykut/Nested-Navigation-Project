import React from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const Header = ({onBack, title}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
      <TouchableOpacity onPress={onBack} activeOpacity={0.9}>
        <Image
          style={{width: 45, height: 45}}
          source={require('../assets/backIcon.png')}
        />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
        }}>
        {' '}
        {title}{' '}
      </Text>
      <View style={{width:45, height:45}} />
    </View>
  );
};


export default React.memo(Header);