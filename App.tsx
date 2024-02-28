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
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={appColors.primary}
        translucent
      />

      <GestureHandlerRootView style={{flex: 1}}>
        <StoreProvider>
          <NavigationContainer>
            <MainNavigator />
          </NavigationContainer>
        </StoreProvider>
      </GestureHandlerRootView>
    </>
  );
}

export default App;
