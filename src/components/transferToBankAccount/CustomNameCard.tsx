import React from 'react';
import {CardComponent, RowComponent, TextComponent} from '..';
import {Image, StyleSheet, View} from 'react-native';
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

const CustomNameCard = () => {
  return (
    <CardComponent styles={styles.cardComponent}>
      <RowComponent
        justify="space-between"
        noStylesGlobal
        styles={styles.rowComponent}>
        <View>
          <TextComponent
            text="CUSTOMER NAME"
            size={14}
            color={appColors.title2}
          />
          <TextComponent
            text="8099999939"
            color={appColors.gray}
            size={14}
            weight="400"
            styles={styles.formDescription}
          />
          <TextComponent
            text="300,000,000 KHR"
            color={appColors.orange}
            size={20}
            weight="600"
            styles={styles.formTotal}
          />
        </View>
        <View style={styles.viewChangeRight}>
          <View style={styles.changeRight}>
            <TextComponent
              text="CHANGE"
              color={appColors.primary}
              size={12}
              weight="400"
            />
            <Image
              source={require('../../assets/images/icons/icon-right-arr-blue.png')}
              style={styles.imageRightCard}
            />
          </View>
        </View>
      </RowComponent>
    </CardComponent>
  );
};

export default observer(CustomNameCard);
