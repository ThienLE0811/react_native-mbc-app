import React, {MutableRefObject, useCallback, useRef} from 'react';
import {
  ButtonComponent,
  CardComponent,
  RowComponent,
  SpaceComponent,
  TextComponent,
} from '..';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {appColors} from '../../constansts/appColors';
import {observer} from 'mobx-react';
import {mockApiListAccount} from '../../constansts/mockApi';
import {BottomSheetModal, BottomSheetSectionList} from '@gorhom/bottom-sheet';
import CardInfo from '../bottomSheet/CardInfo';
import {CloseCircle, SearchNormal1} from 'iconsax-react-native';

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
  sectionHeaderContainer: {
    backgroundColor: 'white',
    padding: 2,
  },
  textButtonStyles: {
    color: appColors.orange,
    fontSize: 18,
    fontWeight: '600',
  },
  textInput: {
    flex: 1,
  },
  rowComponentSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  onSelect: (item: AccountInfoBeneficiary) => void;
  bottomRef: MutableRefObject<BottomSheetModal>;
}

const BottomSheetBeneficiary = (props: Props) => {
  // ref
  // const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const {banks, onDismiss, bottomRef, onSelect} = props;

  const renderSectionHeader = useCallback(
    ({section}: any) => (
      <View style={styles.sectionHeaderContainer}>
        <TextComponent text={section.title} size={16} weight="700" />
      </View>
    ),
    [],
  );

  const renderItem = ({item}: {item: AccountInfoBeneficiary}) => {
    return (
      <TouchableOpacity onPress={() => onSelect(item)} activeOpacity={0.8}>
        <CardInfo
          title={item.title}
          bankName={item.bankName}
          numberBank={item?.numberBank?.toString()}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <BottomSheetModal
        onDismiss={onDismiss}
        ref={bottomRef}
        // enableDynamicSizing={true}
        style={{paddingHorizontal: 16}}
        backdropComponent={({style}) => (
          <View style={[style, {backgroundColor: 'rgba(0, 0, 0, 0.6)'}]} />
        )}
        snapPoints={['90%']}
        enableHandlePanningGesture={false}
        enableOverDrag={false}>
        <>
          <RowComponent justify="space-between">
            <TextComponent text="List" size={20} weight="600" />
            <ButtonComponent
              text="Close"
              textColor={appColors.orange}
              type="text"
              textStyles={styles.textButtonStyles}
              onPress={onDismiss}
            />
          </RowComponent>

          <View style={styles.rowComponentSearch}>
            <SearchNormal1 size="16" color="rgba(170, 170, 170, 1)" />
            <TextInput placeholder="Search" style={styles.textInput} />
            <CloseCircle
              size="20"
              color="rgba(170, 170, 170, 1)"
              variant="Bold"
            />
          </View>

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

const BeneficiaryBankSelect = ({
  onSelect,
  accountInfoBeneficiary,
}: {
  onSelect: (item: AccountInfoBeneficiary) => void;
  accountInfoBeneficiary: AccountInfoBeneficiary;
}) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

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
                text={accountInfoBeneficiary?.bankName}
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
        onSelect={(item: AccountInfoBeneficiary) => {
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
