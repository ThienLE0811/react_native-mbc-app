import React from 'react';
import {CardComponent, RowComponent, SpaceComponent, TextComponent} from '..';
import {Image, StyleSheet, View} from 'react-native';
import {appColors} from '../../constansts/appColors';
import {observer} from 'mobx-react';
import {useStore} from '../../store';

const styles = StyleSheet.create({
  rowComponent: {
    flexDirection: 'row',
    gap: 12,
  },
  cardComponent: {
    padding: 12,
    // flex: 1,
  },

  imageIconArrowDown: {
    height: 22,
    width: 22,
  },

  changeRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const CurrencyCard = () => {
  const {transferStore} = useStore();

  const hanldeChangeIndexBottomSheet = (index: number) => {
    transferStore.setIndexBottomSheet(index);
  };

  return (
    <>
      <CardComponent
        styles={styles.cardComponent}
        onPress={() => hanldeChangeIndexBottomSheet(0)}>
        <RowComponent
          justify="space-between"
          noStylesGlobal
          styles={styles.rowComponent}>
          <View>
            <TextComponent
              text="Currency"
              size={12}
              weight="600"
              color={appColors.gray}
            />
            <SpaceComponent height={8} />

            <TextComponent
              text="KHR"
              color={appColors.title2}
              size={18}
              weight="600"
            />
          </View>

          <View style={styles.changeRight}>
            <Image
              source={require('../../assets/images/icons/icon-arrow-down.png')}
              style={styles.imageIconArrowDown}
            />
          </View>
        </RowComponent>
      </CardComponent>
    </>
  );
};

export default observer(CurrencyCard);
