import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';

const BlueScreen = ({navigation}) => {
  const onNavigate = () => {
    navigation.navigate('YellowScreen');
  };
  const onBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.MainContainer}>
      <Header onBack={onBack} />
      <View style={styles.container}>
        <TouchableOpacity>
          <Text onPress={onNavigate} style={styles.text}>
            Welcome to Blue Screen
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(BlueScreen);

const styles = StyleSheet.create({

  MainContainer: {
    backgroundColor: 'blue',
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
