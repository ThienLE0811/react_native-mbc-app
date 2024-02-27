import React from 'react';
import {CardComponent, RowComponent, SpaceComponent, TextComponent} from '..';
import {appColors} from '../../constansts/appColors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  rowComponent: {},
  cardComponent: {
    padding: 16,
  },
});

const TransactionInformationDetailCard = () => {
  return (
    <CardComponent styles={styles.cardComponent}>
      <RowComponent justify="space-between">
        <TextComponent
          text="Transaction fee"
          color={appColors.title3}
          size={12}
          weight="400"
        />
        <TextComponent
          text="4,000 KHR"
          weight="600"
          size={12}
          color={appColors.title2}
        />
      </RowComponent>
      <SpaceComponent height={16} />
      <RowComponent justify="space-between">
        <TextComponent
          text="Amount receives"
          color={appColors.title3}
          size={12}
          weight="400"
        />

        <TextComponent
          text="180,000,000 VND"
          weight="600"
          size={12}
          color={appColors.primary}
        />
      </RowComponent>
      <SpaceComponent height={16} />
      <RowComponent justify="space-between">
        <TextComponent
          text="Description"
          color={appColors.title3}
          size={12}
          weight="400"
        />
        <TextComponent
          text="CUSTOMER NAME transfers"
          weight="600"
          size={12}
          color={appColors.title2}
        />
      </RowComponent>
    </CardComponent>
  );
};

export default TransactionInformationDetailCard;
