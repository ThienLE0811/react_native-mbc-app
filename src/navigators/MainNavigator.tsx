import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  LocalTransferScreen,
  SettlementScreen,
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
      <Stack.Screen
        name="Settlement"
        component={SettlementScreen}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
