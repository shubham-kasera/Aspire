import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';

const Home = ({navigation}: {navigation: any}) => {
  return (
    <>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: '#fff'}}>Home Screen</Text>
      </View>
    </>
  );
};

export default Home;
