import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  LocalTransferScreen,
  TransactionConfirmationScreen,
  TransferToBankAccountScreen,
} from '../screens';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Local Transfer" component={LocalTransferScreen} />
      <Stack.Screen
        name="Transfer To Bank Account"
        component={TransferToBankAccountScreen}
      />
      <Stack.Screen
        name="Transaction Comfirmation"
        component={TransactionConfirmationScreen}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
