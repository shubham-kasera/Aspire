import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import Routes from './src/navigation/Routes';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import stores from './src/stores';

const navTheme = DefaultTheme;
navTheme.colors.background = '#0C365A';

const App = () => {
  return (
    <Provider store={stores}>
      <SafeAreaProvider>
        <NavigationContainer theme={navTheme}>
          <StatusBar animated={true} backgroundColor="#0C365A" />
          <Routes />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
