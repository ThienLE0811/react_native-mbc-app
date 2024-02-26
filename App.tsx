/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {appColors} from './src/constansts/appColors';
import MainNavigator from './src/navigators/MainNavigator';
import {StoreProvider} from './src/store';
import {NativeBaseProvider} from 'native-base';

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={appColors.primary}
        translucent
      />
      <StoreProvider>
        <NativeBaseProvider>
          <NavigationContainer>
            <MainNavigator />
          </NavigationContainer>
        </NativeBaseProvider>
      </StoreProvider>
    </>
  );
}

export default App;
