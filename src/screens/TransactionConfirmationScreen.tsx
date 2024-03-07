import React from 'react';
import {StyleSheet, View} from 'react-native';
import {appColors} from '../constansts/appColors';
import {
  ButtonComponent,
  ContainerComponent,
  CustomNameCard,
  HeaderComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
  TotalAmount,
  TransactionInformation,
} from '../components';
import {observer} from 'mobx-react';
import {useStore} from '../store';

const styles = StyleSheet.create({
  sectionComponent: {
    flexDirection: 'column',
    gap: 4,
  },
  amountCurrency: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'space-between',
  },
  amount: {
    flex: 1,
  },
  textButton: {fontSize: 18, fontWeight: '600'},
  containerComponent: {
    flex: 1,
    paddingTop: 10,
  },
  confirmButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: appColors.grayBgHome,
  },
});

const TransactionConfirmationScreen = ({navigation}: any) => {
  const {transferStore} = useStore();

  console.log('transferStore from:: ', transferStore.accountInfoMoneyTransfer);
  console.log(
    'transferStore:: ',
    transferStore.accountInfoBeneficiary,
  );

  console.log(
    'transferStore to accountNumberBeneficiary:: ',
    transferStore.accountNumberBeneficiary
  );

  console.log(
    'transferStore to description:: ',
    transferStore.bankInfoBeneficiary.description,
  );

  const accountTransferToInfo: AccountTransferToInfo = {
    name: transferStore.accountInfoBeneficiary.title,
    bankName: transferStore.bankInfoBeneficiary.bankName,
    numberBank: transferStore.accountInfoBeneficiary.numberBank || "",
  };

  const transactionInfoDetail:TransactionInfoDetail = {
    amount: transferStore.amountBeneficiary ,
    description: transferStore.accountInfoBeneficiary.description || ""
  }

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <HeaderComponent title="Transaction confirmation" goBack={goBack} />

      <ContainerComponent styles={styles.containerComponent}>
        <SectionComponent>
          <TotalAmount totalAmount={transferStore.amountBeneficiary} typeMoney={transferStore.typeMoney.label}/>
          <SpaceComponent height={16} />
          <TransactionInformation
            accountTranferFromInfo={transferStore.accountInfoMoneyTransfer}
            accountTransferToInfo={
              accountTransferToInfo
            }
            transactionInfoDetail={transactionInfoDetail}
          />
          <SpaceComponent height={16} />
        </SectionComponent>
      </ContainerComponent>
      <View style={styles.confirmButton}>
        <ButtonComponent
          text="Confirm"
          type="primary"
          color={appColors.primary}
          textColor={appColors.white}
          textStyles={styles.textButton}
          onPress={() => console.log('123')}
        />
      </View>
    </>
  );
};

export default observer(TransactionConfirmationScreen);
