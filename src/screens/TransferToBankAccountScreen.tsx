import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {appColors} from '../constansts/appColors';
import {
  CardComponent,
  ContainerComponent,
  HeaderComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../components';

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

const TransferToBankAccountScreen = ({navigation}: any) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <HeaderComponent title="Transfer to Bank account" goBack={goBack} />
      <SpaceComponent height={10} />
      <ContainerComponent isScroll>
        <SectionComponent styles={styles.sectionComponent}>
          <TextComponent text="Form" color={appColors.title} weight="400" />
          <CardComponent styles={styles.cardComponent}>
            <RowComponent
              justify="space-between"
              noStylesGlobal
              styles={styles.rowComponent}>
              <View>
                <TextComponent
                  text="CUSTOMER NAME"
                  size={14}
                  color={appColors.title2}
                />
                <TextComponent
                  text="8099999939"
                  color={appColors.gray}
                  size={14}
                  weight="400"
                  styles={styles.formDescription}
                />
                <TextComponent
                  text="300,000,000 KHR"
                  color={appColors.orange}
                  size={20}
                  weight="600"
                  styles={styles.formTotal}
                />
              </View>
              <View style={styles.viewChangeRight}>
                <View style={styles.changeRight}>
                  <TextComponent
                    text="CHANGE"
                    color={appColors.primary}
                    size={12}
                    weight="400"
                  />
                  <Image
                    source={require('../assets/images/icons/icon-right-arr-blue.png')}
                    style={styles.imageRightCard}
                  />
                </View>
              </View>
            </RowComponent>
          </CardComponent>
        </SectionComponent>
      </ContainerComponent>
    </>
  );
};

export default TransferToBankAccountScreen;
