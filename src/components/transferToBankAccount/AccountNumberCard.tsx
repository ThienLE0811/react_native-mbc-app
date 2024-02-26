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
    gap: 12,
  },
});

const AccountNumberCard = () => {
  return (
    <CardComponent styles={styles.cardComponent}>
      <RowComponent
        justify="space-between"
        noStylesGlobal
        styles={styles.rowComponent}>
        <View>
          <TextComponent
            text="Account number"
            size={14}
            weight="600"
            color={appColors.gray}
          />

          <TextComponent
            text="0789454545"
            color={appColors.title2}
            size={16}
            weight="400"
            styles={styles.formTotal}
          />
        </View>

        <View style={styles.changeRight}>
          <TextComponent
            text="USD"
            color={appColors.green}
            size={16}
            weight="600"
          />
          <ArchiveBook size="24" color="#FF8A65" />
        </View>
      </RowComponent>
    </CardComponent>
  );
};

export default observer(AccountNumberCard);
