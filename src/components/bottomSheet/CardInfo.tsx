import React from 'react';
import {CardComponent, RowComponent, SpaceComponent, TextComponent} from '..';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {appColors} from '../../constansts/appColors';

interface Props {
  logo?: string;
  title?: string;
  numberBank?: string;
  bankName?: string;
}

const CardInfo = (props: Props) => {
  const {logo, title, numberBank, bankName} = props;

  return (
    <TouchableOpacity
      onPress={() => {
        console.log('ssss');
      }}>
      <View>
        <CardComponent styles={styles.cardComponent}>
          <RowComponent
            justify="flex-start"
            noStylesGlobal
            styles={[styles.rowComponent, styles.toCard]}>
            <Image
              source={require('../../assets/images/others/logo-canadia-bank.png')}
              style={styles.imageIconLogo}
            />
            <View>
              <TextComponent
                text={title || ''}
                size={14}
                color={appColors.title2}
                weight="700"
              />

              <SpaceComponent height={2} />
              <TextComponent
                text={numberBank || ''}
                color={appColors.gray3}
                size={12}
                weight="600"
                styles={styles.formDescription}
              />

              <TextComponent
                text={bankName || ''}
                color={appColors.gray}
                size={12}
                weight="400"
                styles={styles.formDescription}
              />
            </View>
          </RowComponent>
        </CardComponent>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  sectionComponent: {
    flexDirection: 'column',
    gap: 4,
  },
  rowComponent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  cardComponent: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  imageIconLogo: {
    height: 24,
    width: 24,
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
  dividerFromCard: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: appColors.grayBgCard,
    paddingBottom: 12,
  },
  toCard: {
    paddingTop: 12,
  },
});

export default CardInfo;
