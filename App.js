import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';

import HomeScreen from './src/containers/HomeScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <HomeScreen />
      <FlashMessage position="bottom" autoHide />
    </SafeAreaProvider>
  );
};

export default App;
