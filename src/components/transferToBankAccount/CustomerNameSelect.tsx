import React, {MutableRefObject, useRef} from 'react';
import {ButtonComponent, CardComponent, RowComponent, TextComponent} from '..';
import {
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {appColors} from '../../constansts/appColors';
import {observer} from 'mobx-react';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {CloseCircle, SearchNormal1} from 'iconsax-react-native';
import CardInfo from '../bottomSheet/CardInfo';
import {accountInfoMoneyTransfer} from '../../constansts/mockApi';
import {Control, UseFormRegister} from 'react-hook-form';

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
  textInput: {
    flex: 1,
  },
  textButtonStyles: {
    color: appColors.orange,
    fontSize: 18,
    fontWeight: '600',
  },
  rowComponentSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

interface Props {
  banks: Array<AccountInfoMoneyTransfer>;
  open: boolean;
  onDismiss: () => void;
  onSelect: (item: AccountInfoMoneyTransfer) => void;
  bottomRef: MutableRefObject<BottomSheetModal>;
}

const renderItem = ({
  item,
  onSelect,
}: {
  item: AccountInfoMoneyTransfer;
  onSelect: (item: any) => void;
}) => {
  return (
    <TouchableOpacity onPress={() => onSelect(item)} activeOpacity={0.8}>
      <CardInfo
        title={item.userName}
        bankName={`${item.amount} ${item.typeMoney}`}
        numberBank={item?.numberBank?.toString()}
      />
    </TouchableOpacity>
  );
};

const BottomSheetBeneficiary = (props: Props) => {
  // ref
  // const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const {banks, onDismiss, bottomRef, onSelect} = props;
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
        enableOverDrag={false}
        // onChange={() => console.log('123')}
      >
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

          <FlatList
            data={banks}
            renderItem={({item}) => renderItem({item, onSelect})}
            keyExtractor={item => item.id}
          />

          {/* <BottomSheetFlatList
            sections={data}
            keyExtractor={i => i}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            style={styles.contentContainer}
          /> */}
        </>
      </BottomSheetModal>
    </View>
  );
};

const CustomerNameSelect = ({
  onSelect,
  customnerNameInfo,
}: {
  onSelect: (item: AccountInfoMoneyTransfer) => void;
  customnerNameInfo: AccountInfoMoneyTransfer;
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
          <View>
            <TextComponent
              text={customnerNameInfo?.userName}
              size={14}
              color={appColors.title2}
            />
            <TextComponent
              text={customnerNameInfo?.numberBank}
              color={appColors.gray}
              size={14}
              weight="400"
              styles={styles.formDescription}
            />
            <TextComponent
              text={`${customnerNameInfo?.amount} ${customnerNameInfo?.typeMoney}`}
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
                source={require('../../assets/images/icons/icon-right-arr-blue.png')}
                style={styles.imageRightCard}
              />
            </View>
          </View>
        </RowComponent>
      </CardComponent>
      <BottomSheetBeneficiary
        banks={accountInfoMoneyTransfer}
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

export default observer(CustomerNameSelect);
