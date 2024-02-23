/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {appColors} from './src/constansts/appColors';

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: appColors.primary,
  },
});

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={appColors.primary}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
