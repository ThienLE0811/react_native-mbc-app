import React, {useCallback, useMemo, useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import BottomSheet, {
  BottomSheetSectionList,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {appInfo} from '../../constansts/appInfo';
import CardInfo from './CardInfo';
import {TextComponent} from '..';

type ListAccount = {
  id: number;
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
}

const BottomSheetComponent = (props: Props) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  const {data} = props;

  // callbacks
  //   const handleSheetChanges = useCallback((index: number) => {
  //     console.log('handleSheetChanges', index);
  //   }, []);
  const hanldeBottomSheetChange = () => {
    bottomSheetRef.current?.expand();
  };

  const renderSectionHeader = useCallback(
    ({section}) => (
      <View style={styles.sectionHeaderContainer}>
        <TextComponent text={section.title} size={16} weight="700" />
      </View>
    ),
    [],
  );

  const renderItem = useCallback(({item}) => {
    console.log('items: ', item);
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
      // index={-1}
      ref={bottomSheetRef}
      style={styles.container}
      // enableDynamicSizing={true}
      snapPoints={['90%']}
      enableHandlePanningGesture={false}
      enableOverDrag={false}
      onChange={() => console.log('123')}>
      <BottomSheetSectionList
        sections={data}
        keyExtractor={i => i.id}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        style={styles.contentContainer}
      />
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  contentContainer: {
    flex: 1,
    // paddingHorizontal: 16,
  },
  sectionHeaderContainer: {
    backgroundColor: 'white',
    padding: 2,
  },
});

export default BottomSheetComponent;
