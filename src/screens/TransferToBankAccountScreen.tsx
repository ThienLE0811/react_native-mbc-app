import React from 'react';
import {StyleSheet, View} from 'react-native';
import {appColors} from '../constansts/appColors';
import {
  AccountBeneficiaryNumberSelect,
  AccountNameCard,
  AmountCard,
  ButtonComponent,
  ContainerComponent,
  CurrencyCard,
  CustomNameCard,
  DescriptionCard,
  HeaderComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../components';
import {observer} from 'mobx-react';
import {useStore} from '../store';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import BeneficiaryBankSelect from '../components/transferToBankAccount/BeneficiaryBankSelect';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

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

const schema = yup.object().shape({
  accountNumber: yup.number().min(12).max(12).required(),
  amount: yup.number().min(4).max(1).required(),
});

const TransferToBankAccountScreen = ({navigation}: any) => {
  const {transferStore} = useStore();
  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
    register,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
    defaultValues: {
      accountNumber:
        transferStore.accountInfoBeneficiary?.numberBank || undefined,
    },
  });

  console.log('log:: ', transferStore.accountInfoBeneficiary);

  const goBack = () => {
    navigation.goBack();
  };

  const handleTransactionComfirmation = () => {
    navigation.navigate('Transaction Comfirmation');
  };

  const handleChangeAccountInfoBeneficiary = (info: AccountInfoBeneficiary) => {
    transferStore.setAccountInfoBeneficiary(info);
  };

  const handleChangeBankInfoBeneficiary = (info: AccountInfoBeneficiary) => {
    transferStore.setBankInfoBeneficiary(info);
  };

  return (
    <>
      <BottomSheetModalProvider>
        <HeaderComponent title="Transfer to Bank account" goBack={goBack} />

        <ContainerComponent isScroll styles={styles.container}>
          <SectionComponent styles={styles.sectionComponent}>
            <TextComponent text="Form" color={appColors.title} weight="400" />
            <CustomNameCard />
          </SectionComponent>
          <SectionComponent styles={styles.sectionComponent}>
            <TextComponent text="To" color={appColors.title} weight="400" />

            <BeneficiaryBankSelect
              onSelect={handleChangeBankInfoBeneficiary}
              accountInfoBeneficiary={transferStore.bankInfoBeneficiary}
            />
            <SpaceComponent height={16} />

            <AccountBeneficiaryNumberSelect
              control={control}
              name={'accountNumber'}
              onSelect={handleChangeAccountInfoBeneficiary}
              defaultValue={transferStore.accountInfoBeneficiary?.numberBank}
            />
            <SpaceComponent height={16} />

            <AccountNameCard
              title={transferStore.accountInfoBeneficiary?.title}
            />
            <SpaceComponent height={16} />

            <View style={styles.amountCurrency}>
              <View style={styles.amount}>
                <AmountCard
                  control={control}
                  name={'amount'}
                  register={register}
                />
              </View>
              <CurrencyCard />
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

        {/* <BottomSheetComponent
        indexBottomSheet={transferStore.indexBottomSheet}
        onCallback={hanldeChangeIndexBottomSheet}
        data={mockApiListAccount}
      /> */}
      </BottomSheetModalProvider>
    </>
  );
};

export default observer(TransferToBankAccountScreen);
