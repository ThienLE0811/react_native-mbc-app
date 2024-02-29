import React, {useCallback, useEffect, useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import BottomSheet, {BottomSheetSectionList} from '@gorhom/bottom-sheet';
import CardInfo from './CardInfo';
import {ButtonComponent, RowComponent, TextComponent} from '..';
import {appColors} from '../../constansts/appColors';

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
  data: Array<ListAccount>;
  onCallback?: (index: number) => void;
  indexBottomSheet: number;
}

const BottomSheetComponent = (props: Props) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  const {data, onCallback, indexBottomSheet} = props;

  //
  useEffect(() => {}, []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  const hanldeBottomSheetChange = () => {
    onCallback?.(-1);
    bottomSheetRef.current?.close();
  };

  const renderSectionHeader = useCallback(
    ({section}: any) => (
      <View style={styles.sectionHeaderContainer}>
        <TextComponent text={section.title} size={16} weight="700" />
      </View>
    ),
    [],
  );

  const renderItem = useCallback(({item}: any) => {
    return (
      <CardInfo
        title={item.title}
        bankName={item.bankName}
        numberBank={item.numberBank}
      />
    );
  }, []);
  // renders

  return (
    <BottomSheet
      index={indexBottomSheet}
      ref={bottomSheetRef}
      style={styles.container}
      // enableDynamicSizing={true}
      backdropComponent={
        indexBottomSheet === -1
          ? null
          : ({style}) => (
              <View style={[style, {backgroundColor: 'rgba(0, 0, 0, 0.6)'}]} />
            )
      }
      snapPoints={['90%']}
      enableHandlePanningGesture={false}
      enableOverDrag={false}
      handleIndicatorStyle={styles.handleIndicatorStyle}
      onChange={handleSheetChanges}>
      <View style={styles.contentContainer}>
        <RowComponent styles={styles.rowComponent} justify="space-between">
          <TextComponent text="List" size={20} weight="600" />
          <ButtonComponent
            text="Close"
            textColor={appColors.orange}
            type="text"
            textStyles={styles.textButtonStyles}
            onPress={hanldeBottomSheetChange}
          />
        </RowComponent>

        <BottomSheetSectionList
          sections={data}
          keyExtractor={i => i.id}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          style={styles.contentContainer}
        />
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  contentContainer: {
    flex: 1,
    // paddingHorizontal: 16,
  },
  sectionHeaderContainer: {
    backgroundColor: 'white',
    padding: 2,
  },
  handleIndicatorStyle: {
    display: 'none',
  },
  rowComponent: {
    alignItems: 'center',
  },
  textButtonStyles: {
    color: appColors.orange,
    fontSize: 18,
    fontWeight: '600',
  },
});

export default BottomSheetComponent;
