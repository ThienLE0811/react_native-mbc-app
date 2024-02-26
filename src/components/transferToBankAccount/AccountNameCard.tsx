import React from 'react';
import {CardComponent, RowComponent, TextComponent} from '..';
import {StyleSheet, View} from 'react-native';
import {appColors} from '../../constansts/appColors';
import {observer} from 'mobx-react';

const styles = StyleSheet.create({
  sectionComponent: {
    flexDirection: 'column',
    gap: 4,
  },
  rowComponent: {
    flexDirection: 'row',
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
  },
});

const AccountNameCard = () => {
  return (
    <CardComponent styles={styles.cardComponent} bgColor={appColors.grayBgCard}>
      <RowComponent
        justify="space-between"
        noStylesGlobal
        styles={styles.rowComponent}>
        <View>
          <TextComponent text="Account name" size={14} color={appColors.gray} />

          <TextComponent
            text="CUSTOMER NAME"
            color={appColors.title2}
            size={16}
            weight="400"
            styles={styles.formTotal}
          />
        </View>
      </RowComponent>
    </CardComponent>
  );
};

export default observer(AccountNameCard);
