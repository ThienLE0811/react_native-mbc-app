import React from 'react';
import {Image, StyleSheet} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import {
  CardComponent,
  ContainerComponent,
  RowComponent,
  SectionComponent,
  TextComponent,
} from '../components';

const styles = StyleSheet.create({
  sectionComponent: {
    flexDirection: 'column',
    gap: 20,
  },
  imageLeftCard: {
    height: 50,
    width: 50,
  },
  imageRightCard: {
    height: 20,
    width: 20,
  },
  rowComponent: {
    gap: 8,
  },
  cardComponent: {
    padding: 16,
  },
  textFlex: {
    flex: 1,
  },
});

const LocalTransferScreen = ({navigation}: any) => {
  const navigateTransferToBankAccountScreen = () => {
    navigation.navigate('Transfer To Bank Account');
  };

  return (
    <>
      <HeaderComponent title="Local Transfer" />
      <ContainerComponent isImageBackground>
        <SectionComponent styles={styles.sectionComponent}>
          <CardComponent styles={styles.cardComponent}>
            <RowComponent styles={styles.rowComponent} justify="space-between">
              <Image
                source={require('../assets/images/icons/icon-star-blue.png')}
                style={styles.imageLeftCard}
              />
              <TextComponent text="Inhouse transfer" styles={styles.textFlex} />

              <Image
                source={require('../assets/images/icons/icon-right-arr-blue.png')}
                style={styles.imageRightCard}
              />
            </RowComponent>
          </CardComponent>

          <CardComponent styles={styles.cardComponent}>
            <RowComponent styles={styles.rowComponent} justify="space-between">
              <Image
                source={require('../assets/images/icons/icon-star-red.png')}
                style={styles.imageLeftCard}
              />
              <TextComponent
                text="Transfer to Bakong account"
                styles={styles.textFlex}
              />

              <Image
                source={require('../assets/images/icons/icon-right-arr-blue.png')}
                style={styles.imageRightCard}
              />
            </RowComponent>
          </CardComponent>

          <CardComponent
            styles={styles.cardComponent}
            onPress={navigateTransferToBankAccountScreen}>
            <RowComponent styles={styles.rowComponent} justify="space-between">
              <Image
                source={require('../assets/images/icons/icon-home-blue.png')}
                style={styles.imageLeftCard}
              />
              <TextComponent
                text="Transfer to Bank account"
                styles={styles.textFlex}
              />

              <Image
                source={require('../assets/images/icons/icon-right-arr-blue.png')}
                style={styles.imageRightCard}
              />
            </RowComponent>
          </CardComponent>
        </SectionComponent>
      </ContainerComponent>
    </>
  );
};

export default LocalTransferScreen;
