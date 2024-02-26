import React from 'react';
import {StyleSheet} from 'react-native';
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
} from '../components';
import {observer} from 'mobx-react';

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
});

const TransactionConfirmationScreen = ({navigation}: any) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <HeaderComponent title="Transaction confirmation" goBack={goBack} />
      <SpaceComponent height={10} />
      <ContainerComponent isScroll>
        <SectionComponent>
          <TotalAmount />
          <SpaceComponent height={16} />
          <ButtonComponent
            text="Confirm"
            type="primary"
            color={appColors.primary}
            textColor={appColors.white}
            textStyles={styles.textButton}
            onPress={() => console.log('123')}
          />
        </SectionComponent>
      </ContainerComponent>
    </>
  );
};

export default observer(TransactionConfirmationScreen);
