import React, {MutableRefObject, useCallback, useRef, useState} from 'react';
import {CardComponent, RowComponent, SpaceComponent, TextComponent} from '..';
import {
  Button,
  Image,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {appColors} from '../../constansts/appColors';
import {observer} from 'mobx-react';
import {useStore} from '../../store';
import BottomSheetModalComponent from '../bottomSheet/BottomSheetModal';
import {mockApiListAccount} from '../../constansts/mockApi';
import {BottomSheetModal, BottomSheetSectionList} from '@gorhom/bottom-sheet';
import CardInfo from '../bottomSheet/CardInfo';

const styles = StyleSheet.create({
  sectionComponent: {
    flexDirection: 'column',
    gap: 4,
  },
  rowComponent: {
    flexDirection: 'row',
    flex: 1,
  },
  cardComponent: {
    padding: 12,
  },

  imageIconArrowDown: {
    height: 22,
    width: 22,
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

  imageIconLogo: {
    height: 20,
    width: 20,
  },

  rowInfoComponent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  textInfo: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    // paddingHorizontal: 16,
  },
  // container: {
  //   padding: 20,
  // },
  sectionHeaderContainer: {
    backgroundColor: 'white',
    padding: 2,
  },
});

type ListAccount = {
  id: string;
  title: string;
  data: Array<{
    id: string;
    title: string;
    numberBank: string;
    bankName: string;
  }>;
};

interface Props {
  banks: Array<ListAccount>;
  open: boolean;
  onDismiss: () => void;
  onSelect: (item: any) => void;
  bottomRef?: MutableRefObject<BottomSheetModal>;
}

const BottomSheetBeneficiary = (props: Props) => {
  // ref
  // const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const {banks, open, onDismiss, bottomRef, onSelect} = props;

  // callbacks
  //   const handleSheetChanges = useCallback((index: number) => {
  //     console.log('handleSheetChanges', index);
  //   }, []);
  // const hanldeBottomSheetChange = () => {
  //   bottomSheetModalRef.current?.expand();
  // };

  const renderSectionHeader = useCallback(
    ({section}) => (
      <View style={styles.sectionHeaderContainer}>
        <TextComponent text={section.title} size={16} weight="700" />
      </View>
    ),
    [],
  );

  const renderItem = ({item}) => {
    return (
      <CardInfo
        title={item.title}
        bankName={item.bankName}
        numberBank={item.numberBank}
      />
    );
  };

  // const handlePresentModalPress = useCallback(() => {
  //   bottomSheetModalRef.current?.present();
  // }, []);

  // renders
  return (
    <View style={styles.container}>
      {/* <Button
        onPress={handlePresentModalPress}
        title="Present Modal"
        color="black"
      /> */}
      <BottomSheetModal
        // index={-1}
        // index={0}
        onDismiss={onDismiss}
        ref={bottomRef}
        style={styles.container}
        // enableDynamicSizing={true}
        backdropComponent={({style}) => (
          <View style={[style, {backgroundColor: 'rgba(0, 0, 0, 0.6)'}]} />
        )}
        snapPoints={['90%']}
        enableHandlePanningGesture={false}
        enableOverDrag={false}
        onChange={() => console.log('123')}>
        <>
          <Button
            onPress={() => bottomRef.current.close()}
            title="Present Modal"
            color="black"
          />
          <BottomSheetSectionList
            sections={banks}
            keyExtractor={i => i.id}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            style={styles.contentContainer}
          />
        </>
      </BottomSheetModal>
    </View>
  );
};

const BeneficiaryBankSelect = ({onSelect}) => {
  // const [openModal, setOpenModal] = useState<boolean>(false);
  const bottomSheetModalRef = useRef<BottomSheetModal>();
  // // const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  // // const hanldeChangeOpenModal = () => {
  // //   setOpenModal(!openModal);
  // // };

  // console.log('open modal:: ', openModal);

  return (
    <>
      <CardComponent
        styles={styles.cardComponent}
        onPress={() => {
          // setOpenModal(true);
          bottomSheetModalRef.current?.present();
        }}>
        <RowComponent
          justify="space-between"
          noStylesGlobal
          styles={styles.rowComponent}>
          <View style={{flex: 1}}>
            <TextComponent
              text="Select beneficiary bank"
              size={12}
              weight="600"
              color={appColors.gray}
            />
            <SpaceComponent height={8} />

            <RowComponent styles={styles.rowInfoComponent}>
              <Image
                source={require('../../assets/images/others/logo-canadia-bank.png')}
                style={styles.imageIconLogo}
              />

              <TextComponent
                text="Canadia Bank"
                color={appColors.title2}
                size={18}
                weight="600"
                styles={styles.textInfo}
              />
            </RowComponent>
          </View>

          <View style={styles.changeRight}>
            <Image
              source={require('../../assets/images/icons/icon-arrow-down.png')}
              style={styles.imageIconArrowDown}
            />
          </View>
        </RowComponent>
      </CardComponent>
      <BottomSheetBeneficiary
        banks={mockApiListAccount}
        onSelect={item => {
          onSelect(item);
          bottomSheetModalRef.current?.close();
        }}
        // open={openModal}
        bottomRef={bottomSheetModalRef}
        onDismiss={() => bottomSheetModalRef.current?.close()}
      />
    </>
  );
};

export default observer(BeneficiaryBankSelect);
