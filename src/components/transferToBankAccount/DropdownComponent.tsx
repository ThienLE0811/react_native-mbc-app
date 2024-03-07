// import React from 'react';
// import {CardComponent, RowComponent, SpaceComponent, TextComponent} from '..';
// import {Image, StyleSheet, View} from 'react-native';
// import {appColors} from '../../constansts/appColors';
// import {observer} from 'mobx-react';
// import {useStore} from '../../store';

// const styles = StyleSheet.create({
//   rowComponent: {
//     flexDirection: 'row',
//     gap: 12,
//   },
//   cardComponent: {
//     padding: 12,
//     // flex: 1,
//   },

//   imageIconArrowDown: {
//     height: 22,
//     width: 22,
//   },

//   changeRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
// });

// const CurrencyCard = () => {
//   const {transferStore} = useStore();

//   const hanldeChangeIndexBottomSheet = (index: number) => {
//     transferStore.setIndexBottomSheet(index);
//   };

//   return (
//     <>
//       <CardComponent
//         styles={styles.cardComponent}
//         onPress={() => hanldeChangeIndexBottomSheet(0)}>
//         <RowComponent
//           justify="space-between"
//           noStylesGlobal
//           styles={styles.rowComponent}>
//           <View>
//             <TextComponent
//               text="Currency"
//               size={12}
//               weight="600"
//               color={appColors.gray}
//             />
//             <SpaceComponent height={8} />

//             <TextComponent
//               text="KHR"
//               color={appColors.title2}
//               size={18}
//               weight="600"
//             />
//           </View>

//           <View style={styles.changeRight}>
//             <Image
//               source={require('../../assets/images/icons/icon-arrow-down.png')}
//               style={styles.imageIconArrowDown}
//             />
//           </View>
//         </RowComponent>
//       </CardComponent>
//     </>
//   );
// };

// export default observer(CurrencyCard);

import { observable } from 'mobx';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

interface Props {
  onSelect: (item: {label: string, value: string})=> void
}

const data = [
  {label: 'KHR', value: '1'},
  {label: 'USD', value: '2'},
];



const DropdownComponent = (props: Props) => {
  const {onSelect} = props
  const [value, setValue] = useState(data[0]);
  


  useEffect(()=>{
    onSelect(data[0])
  },[])



  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      search={false}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Select item"
      searchPlaceholder="Search..."
      value={value}
      onChange={(item: {label: string, value: string}) => {
        setValue(item.value);
        onSelect(item)
      }}
      renderRightIcon={() => (
        <Image
          source={require('../../assets/images/icons/icon-arrow-down.png')}
          style={styles.imageIconArrowDown}
        />
      )}
      // renderLeftIcon={() => (
      //   <Image
      //     source={require('../../assets/images/icons/icon-arrow-down.png')}
      //     style={styles.imageIconArrowDown}
      //   />
      // )}
      renderItem={renderItem}
    />
  );
}

export default DropdownComponent ;

const styles = StyleSheet.create({
  dropdown: {
    // margin: 16,
    maxWidth: 100,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    flex: 1,
    // elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },

  imageIconArrowDown: {
    height: 22,
    width: 22,
  },
});
