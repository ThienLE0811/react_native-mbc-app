import React from 'react';
import {CardComponent, RowComponent, TextComponent} from '..';
import {StyleSheet, View} from 'react-native';
import {appColors} from '../../constansts/appColors';
import {observer} from 'mobx-react';
import {ArchiveBook} from 'iconsax-react-native';

const styles = StyleSheet.create({
  sectionComponent: {
    flexDirection: 'column',
    gap: 4,
  },

  cardComponent: {
    padding: 12,
  },

  imageRightCard: {
    height: 16,
    width: 16,
  },
  formDescription: {marginTop: 4},

  formTotal: {
    marginTop: 6,
  },

  viewChangeRight: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },

  changeRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
});

const AmountCard = () => {
  return (
    <CardComponent styles={styles.cardComponent}>
      <RowComponent justify="space-between" noStylesGlobal>
        <TextComponent
          text="Amount"
          size={14}
          weight="600"
          color={appColors.gray}
        />

        <TextComponent
          text="180,000,000"
          color={appColors.title2}
          size={16}
          weight="400"
          styles={styles.formTotal}
        />
      </RowComponent>
    </CardComponent>
  );
};

export default observer(AmountCard);
