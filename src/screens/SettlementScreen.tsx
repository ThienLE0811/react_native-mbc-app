import {StyleSheet, View} from 'react-native';
import {
  ButtonComponent,
  ContainerComponent,
  HeaderComponent,
  TextComponent,
} from '../components';
import {appColors} from '../constansts/appColors';

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 20,
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
  confirmButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: appColors.grayBgHome,
  },
});

const SettlementScreen = ({navigation}: any) => {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <>
      <HeaderComponent title="Settlement" goBack={goBack} />
      <ContainerComponent isScroll styles={styles.container}>
        <TextComponent
          text="Settlement Options"
          size={18}
          weight="600"
          color={appColors.title2}
        />
      </ContainerComponent>

      <View style={styles.confirmButton}>
        <ButtonComponent
          text="Next"
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

export default SettlementScreen;
