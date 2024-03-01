import React, {MutableRefObject, useCallback, useMemo, useRef} from 'react';
import {
  ButtonComponent,
  CardComponent,
  InputComponent,
  RowComponent,
  TextComponent,
} from '..';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {appColors} from '../../constansts/appColors';
import {observer} from 'mobx-react';
import {ArchiveBook, CloseCircle, SearchNormal1} from 'iconsax-react-native';
import {
  BottomSheetFlatList,
  BottomSheetModal,
  BottomSheetSectionList,
} from '@gorhom/bottom-sheet';
import CardInfo from '../bottomSheet/CardInfo';
import {mockApiListAccountNumber} from '../../constansts/mockApi';
import {Control} from 'react-hook-form';

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
    gap: 12,
  },
  textButtonStyles: {
    color: appColors.orange,
    fontSize: 18,
    fontWeight: '600',
  },
  sectionHeaderContainer: {
    backgroundColor: 'white',
    padding: 2,
  },
  rowComponentSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    // paddingHorizontal: 16,
  },
});

interface Props {
  banks: Array<AccountNumber>;
  open: boolean;
  onDismiss: () => void;
  onSelect: (item: AccountInfoBeneficiary) => void;
  bottomRef: MutableRefObject<BottomSheetModal>;
}

const renderItem = ({
  item,
  onSelect,
}: {
  item: AccountInfoBeneficiary;
  onSelect: (item: any) => void;
}) => {
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

const BottomSheetBeneficiary = (props: Props) => {
  // ref
  // const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const {banks, onDismiss, bottomRef, onSelect} = props;

  // const renderSectionHeader = useCallback(
  //   ({section}: any) => (
  //     <View style={styles.sectionHeaderContainer}>
  //       <TextComponent text={section.title} size={16} weight="700" />
  //     </View>
  //   ),
  //   [],
  // );

  // const renderItem = ({item}: {item: any}) => {
  //   console.log('item:: ', item);

  //   return (
  //     <TouchableOpacity onPress={() => onSelect(item)} activeOpacity={0.8}>
  //       <View>
  //         <TextComponent text={item} />
  //       </View>
  //     </TouchableOpacity>
  //   );
  // };

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

const AccountBeneficiaryNumberSelect = ({
  onSelect,
  control,
  name,
  defaultValue,
}: {
  onSelect: (item: AccountInfoBeneficiary) => void;
  control: Control<{}, any, {}>;
  name: string;
  defaultValue?: number;
}) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  return (
    <>
      <CardComponent styles={styles.cardComponent}>
        <RowComponent
          justify="space-between"
          noStylesGlobal
          styles={styles.rowComponent}>
          <View>
            <TextComponent
              text="Account number"
              size={14}
              weight="600"
              color={appColors.gray}
            />

            <InputComponent
              placeHolder="Enter Account Number"
              allowClear
              name={name}
              control={control}
              maxLength={12}
              type="numeric"
              defaultValue={defaultValue?.toString()}
            />

            {/* <TextComponent
              text="0789454545"
              color={appColors.title2}
              size={16}
              weight="400"
              styles={styles.formTotal}
            /> */}
          </View>

          <View style={styles.changeRight}>
            <TextComponent
              text="USD"
              color={appColors.green}
              size={16}
              weight="600"
            />
            <TouchableOpacity
              onPress={() => {
                // setOpenModal(true);
                bottomSheetModalRef.current?.present();
              }}>
              <ArchiveBook size="24" color="#FF8A65" />
            </TouchableOpacity>
          </View>
        </RowComponent>
      </CardComponent>
      <BottomSheetBeneficiary
        banks={mockApiListAccountNumber}
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

export default observer(AccountBeneficiaryNumberSelect);
