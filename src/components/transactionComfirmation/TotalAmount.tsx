import React from 'react';
import {SpaceComponent, TextComponent} from '..';
import {View} from 'react-native';
import {appColors} from '../../constansts/appColors';

interface Props {
  totalAmount: string
  typeMoney: string
}

const TotalAmount = (props: Props) => {
  const {totalAmount, typeMoney} = props
  return (
    <View>
      <TextComponent
        text="TOTAL AMOUNT"
        color={appColors.orange}
        weight="600"
        size={14}
      />
      <SpaceComponent height={8} />
      <TextComponent
        text={`${totalAmount} ${typeMoney}`}
        color={appColors.title2}
        weight="600"
        size={24}
      />
    </View>
  );
};

export default TotalAmount;
