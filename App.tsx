/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {appColors} from './src/constansts/appColors';
import MainNavigator from './src/navigators/MainNavigator';

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: appColors.primary,
  },
});

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={appColors.primary}
        translucent
      />

      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </>
  );
}

export default App;
