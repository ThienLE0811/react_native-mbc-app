import React from 'react';
import {StyleSheet, View} from 'react-native';
import {appColors} from '../constansts/appColors';
import {
  AccountNameCard,
  AccountNumberCard,
  AmountCard,
  BottomSheetComponent,
  ButtonComponent,
  ContainerComponent,
  CustomNameCard,
  DescriptionCard,
  HeaderComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../components';
import {observer} from 'mobx-react';
import BeneficiaryBankCard from '../components/transferToBankAccount/BeneficiaryBankCard';
import {mockApiListAccount} from '../constansts/mockApi';

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
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
});

const TransferToBankAccountScreen = ({navigation}: any) => {
  const goBack = () => {
    navigation.goBack();
  };

  const handleTransactionComfirmation = () => {
    navigation.navigate('Transaction Comfirmation');
  };

  return (
    <>
      <HeaderComponent title="Transfer to Bank account" goBack={goBack} />

      <ContainerComponent isScroll styles={styles.container}>
        <SectionComponent styles={styles.sectionComponent}>
          <TextComponent text="Form" color={appColors.title} weight="400" />
          <CustomNameCard />
        </SectionComponent>
        <SectionComponent styles={styles.sectionComponent}>
          <TextComponent text="To" color={appColors.title} weight="400" />

          <BeneficiaryBankCard />
          <SpaceComponent height={16} />

          <AccountNumberCard />
          <SpaceComponent height={16} />

          <AccountNameCard />
          <SpaceComponent height={16} />

          <View style={styles.amountCurrency}>
            <View style={styles.amount}>
              <AmountCard />
            </View>
            <AmountCard />
          </View>
          <SpaceComponent height={16} />
          <DescriptionCard />

          <SpaceComponent height={16} />
          <ButtonComponent
            text="Next"
            type="primary"
            color={appColors.primary}
            textColor={appColors.white}
            textStyles={styles.textButton}
            onPress={handleTransactionComfirmation}
          />
        </SectionComponent>
      </ContainerComponent>

      <BottomSheetComponent data={mockApiListAccount} />
    </>
  );
};

export default observer(TransferToBankAccountScreen);
