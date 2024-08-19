/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { RootNavigation } from './src/navigation';
import { Provider } from 'react-redux';
import { store } from './src/store';
import Toast from 'react-native-toast-message';
const  App = (): React.JSX.Element=> {
  return (
    <Provider store={store}>
         <NavigationContainer>
        <RootNavigation/>
        <Toast/>
      </NavigationContainer>
    </Provider>
  );
}
export default App;
