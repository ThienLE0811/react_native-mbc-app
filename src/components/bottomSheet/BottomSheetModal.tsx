// import React, {useCallback, useEffect, useRef} from 'react';
// import {View, StyleSheet} from 'react-native';
// import BottomSheet, {
//   BottomSheetModal,
//   BottomSheetSectionList,
// } from '@gorhom/bottom-sheet';
// import CardInfo from './CardInfo';
// import {ButtonComponent, RowComponent, TextComponent} from '..';
// import {appColors} from '../../constansts/appColors';

// type ListAccount = {
//   id: string;
//   title: string;
//   data: Array<{
//     id: string;
//     title: string;
//     numberBank: string;
//     bankName: string;
//   }>;
// };

// interface Props {
//   data: Array<ListAccount>;
//   onCallback?: (index: number) => void;
//   indexBottomSheet: number;
// }

// const BottomSheetModalComponent = (props: Props) => {
//   // ref
//   const bottomSheetRef = useRef<BottomSheetModal>(null);
//   const {data, onCallback, indexBottomSheet} = props;

//   //
//   useEffect(() => {}, []);

//   // callbacks
//   const handleSheetChanges = useCallback((index: number) => {
//     console.log('handleSheetChanges', index);
//   }, []);
//   const hanldeBottomSheetChange = () => {
//     onCallback?.(-1);
//     bottomSheetRef.current?.close();
//   };

//   const renderSectionHeader = useCallback(
//     ({section}: any) => (
//       <View style={styles.sectionHeaderContainer}>
//         <TextComponent text={section.title} size={16} weight="700" />
//       </View>
//     ),
//     [],
//   );

//   const renderItem = useCallback(({item}: any) => {
//     return (
//       <CardInfo
//         title={item.title}
//         bankName={item.bankName}
//         numberBank={item.numberBank}
//       />
//     );
//   }, []);
//   // renders

//   return (
//     <BottomSheetModal
//       index={indexBottomSheet}
//       ref={bottomSheetRef}
//       style={styles.container}
//       // enableDynamicSizing={true}
//       backdropComponent={
//         indexBottomSheet === -1
//           ? null
//           : ({style}) => (
//               <View style={[style, {backgroundColor: 'rgba(0, 0, 0, 0.6)'}]} />
//             )
//       }
//       snapPoints={['90%']}
//       enableHandlePanningGesture={false}
//       enableOverDrag={false}
//       handleIndicatorStyle={styles.handleIndicatorStyle}
//       onChange={handleSheetChanges}>
//       <View style={styles.contentContainer}>
//         <RowComponent styles={styles.rowComponent} justify="space-between">
//           <TextComponent text="List" size={20} weight="600" />
//           <ButtonComponent
//             text="Close"
//             textColor={appColors.orange}
//             type="text"
//             textStyles={styles.textButtonStyles}
//             onPress={hanldeBottomSheetChange}
//           />
//         </RowComponent>

//         <BottomSheetSectionList
//           sections={data}
//           keyExtractor={i => i.id}
//           renderItem={renderItem}
//           renderSectionHeader={renderSectionHeader}
//           style={styles.contentContainer}
//         />
//       </View>
//     </BottomSheetModal>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: 20,
//   },
//   contentContainer: {
//     flex: 1,
//     // paddingHorizontal: 16,
//   },
//   sectionHeaderContainer: {
//     backgroundColor: 'white',
//     padding: 2,
//   },
//   handleIndicatorStyle: {
//     display: 'none',
//   },
//   rowComponent: {
//     alignItems: 'center',
//   },
//   textButtonStyles: {
//     color: appColors.orange,
//     fontSize: 18,
//     fontWeight: '600',
//   },
// });

// export default BottomSheetModalComponent;
import React, {useCallback, useMemo, useRef} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import BottomSheet, {
  BottomSheetModal,
  BottomSheetModalProvider,
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
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const {data} = props;

  // callbacks
  //   const handleSheetChanges = useCallback((index: number) => {
  //     console.log('handleSheetChanges', index);
  //   }, []);
  const hanldeBottomSheetChange = () => {
    bottomSheetModalRef.current?.expand();
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

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  // renders
  return (
    <View style={styles.container}>
      <Button
        onPress={handlePresentModalPress}
        title="Present Modal"
        color="black"
      />
      <BottomSheetModal
        // index={-1}
        index={0}
        ref={bottomSheetModalRef}
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
      </BottomSheetModal>
    </View>
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
