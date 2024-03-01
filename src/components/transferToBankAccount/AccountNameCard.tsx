import React from 'react';
import {CardComponent, RowComponent, TextComponent} from '..';
import {StyleSheet, View} from 'react-native';
import {appColors} from '../../constansts/appColors';
import {observer} from 'mobx-react';

interface Props {
  title: string;
}

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

const AccountNameCard = (props: Props) => {
  const {title} = props;
  return (
    <CardComponent styles={styles.cardComponent} bgColor={appColors.grayBgCard}>
      <RowComponent
        justify="space-between"
        noStylesGlobal
        styles={styles.rowComponent}>
        <View>
          <TextComponent text="Account name" size={14} color={appColors.gray} />

          <TextComponent
            text={title || ''}
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
