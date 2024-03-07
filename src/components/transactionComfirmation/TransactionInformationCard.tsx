import React from 'react';
import {CardComponent, RowComponent, SpaceComponent, TextComponent} from '..';
import {Image, StyleSheet, View} from 'react-native';
import {appColors} from '../../constansts/appColors';

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

const TransactionInformationCard = ({
  accountTranferFromInfo,
  accountTransferToInfo
}: {
  accountTranferFromInfo: AccountInfoMoneyTransfer;
  accountTransferToInfo :AccountTransferToInfo
}) => {
  return (
    <View>
      <CardComponent styles={styles.cardComponent}>
        <RowComponent
          justify="flex-start"
          noStylesGlobal
          styles={styles.rowComponent}>
          <Image
            source={require('../../assets/images/others/logo-mb-cambodia.png')}
            style={styles.imageIconLogo}
          />
          <View style={styles.dividerFromCard}>
            <TextComponent
              text="From"
              color={appColors.gray}
              size={14}
              weight="400"
              styles={styles.formDescription}
            />
            <SpaceComponent height={2} />
            <TextComponent
              text={accountTranferFromInfo.userName}
              size={14}
              color={appColors.title2}
              weight="700"
            />

            <TextComponent
              text={`${accountTranferFromInfo.numberBank} | ${accountTranferFromInfo.typeMoney}`}
              color={appColors.gray3}
              size={14}
              weight="400"
              styles={styles.formDescription}
            />
          </View>
        </RowComponent>
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
              text="To"
              color={appColors.gray}
              size={14}
              weight="400"
              styles={styles.formDescription}
            />
            <SpaceComponent height={2} />
            <TextComponent
              text={accountTransferToInfo.name}
              size={14}
              color={appColors.title2}
              weight="700"
            />

            <TextComponent
              text={`${accountTransferToInfo.numberBank} | ${accountTransferToInfo.bankName}`}
              color={appColors.gray3}
              size={14}
              weight="400"
              styles={styles.formDescription}
            />
          </View>
        </RowComponent>
      </CardComponent>
    </View>
  );
};

export default TransactionInformationCard;
