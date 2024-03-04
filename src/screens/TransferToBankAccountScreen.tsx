import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {appColors} from '../constansts/appColors';
import {
  AccountBeneficiaryNumberSelect,
  AccountNameCard,
  AmountCard,
  ButtonComponent,
  ContainerComponent,
  CurrencyCard,
  CustomerNameSelect,
  DescriptionCard,
  HeaderComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
  TextError,
} from '../components';
import {observer} from 'mobx-react';
import {useStore} from '../store';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import BeneficiaryBankSelect from '../components/transferToBankAccount/BeneficiaryBankSelect';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {accountInfoMoneyTransfer} from '../constansts/mockApi';
import {isEmptyObject} from '../utils';

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
  accountNumber: yup
    .string()
    .matches(/^\d{12}$/, 'Account number must be at least 12 digits'),
  amount: yup.number().min(4).max(200000000).required(),
  description: yup.string().max(64),
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
  const [isChangeNumber, setIsChangeNumber] = useState<boolean>(false);
  const checkErrors = isEmptyObject(errors);
  useEffect(() => {
    transferStore.setAccountInfoMoneyTransfer(accountInfoMoneyTransfer[0]);
  }, []);

  const goBack = () => {
    navigation.goBack();
  };

  console.log(
    'check:: ',
    Boolean(transferStore.bankInfoBeneficiary.description),
  );

  const handleTransactionComfirmation = () => {
    Boolean(transferStore.bankInfoBeneficiary.description) === false &&
      transferStore.setAccountInfoBeneficiary({
        ...transferStore.accountInfoBeneficiary,
        description: `${transferStore.accountInfoMoneyTransfer?.userName} transfers`,
      });

    navigation.navigate('Transaction Comfirmation');
  };

  const handleChangeAccountInfoBeneficiary = (info: AccountInfoBeneficiary) => {
    transferStore.setAccountInfoBeneficiary(info);
  };

  const handleChangeBankInfoBeneficiary = (info: AccountInfoBeneficiary) => {
    transferStore.setBankInfoBeneficiary(info);
  };

  const hanldeBlurAccountNumberBeneficiary = (number: number) => {
    transferStore.setAccountNumberBeneficiary(number.toString());
  };

  const handleChangeAccountNumberBeneficiary = (number: number) => {
    transferStore.setAccountNumberBeneficiary(number.toString());
    register('accountNumber', {
      value: transferStore.accountNumberBeneficiary,
    });
  };

  const handleChangeAccountInfoMoneyTransfer = (
    info: AccountInfoMoneyTransfer,
  ) => {
    transferStore.setAccountInfoMoneyTransfer(info);
  };

  return (
    <>
      <BottomSheetModalProvider>
        <HeaderComponent title="Transfer to Bank account" goBack={goBack} />

        <ContainerComponent isScroll styles={styles.container}>
          <SectionComponent styles={styles.sectionComponent}>
            <TextComponent text="Form" color={appColors.title} weight="400" />
            <CustomerNameSelect
              onSelect={handleChangeAccountInfoMoneyTransfer}
              customnerNameInfo={transferStore.accountInfoMoneyTransfer}
            />
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
              register={register}
              onBlur={hanldeBlurAccountNumberBeneficiary}
              onChange={handleChangeAccountNumberBeneficiary}
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
            <DescriptionCard
              control={control}
              name="description"
              register={register}
              defaultValue={`${transferStore.accountInfoMoneyTransfer?.userName} transfers`}
            />

            <SpaceComponent height={16} />
            <ButtonComponent
              text="Next"
              type="primary"
              color={appColors.primary}
              textColor={appColors.white}
              textStyles={styles.textButton}
              onPress={handleSubmit(handleTransactionComfirmation)}
              disabled={!checkErrors}
            />
          </SectionComponent>
        </ContainerComponent>

        {errors.accountNumber && (
          <TextError children={errors.accountNumber?.message} />
        )}

        {errors.description && (
          <TextError children={errors.description?.message} />
        )}

        {errors.amount && <TextError children={errors.amount?.message} />}

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
