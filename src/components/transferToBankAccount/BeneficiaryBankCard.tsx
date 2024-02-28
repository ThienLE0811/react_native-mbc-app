import React from 'react';
import {CardComponent, RowComponent, TextComponent} from '..';
import {StyleSheet} from 'react-native';
import {appColors} from '../../constansts/appColors';
import {observer} from 'mobx-react';

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

const BeneficiaryBankCard = () => {
  const [service, setService] = React.useState('');

  return (
    <>
      <CardComponent styles={styles.cardComponent}>
        <RowComponent
          justify="space-between"
          noStylesGlobal
          styles={styles.rowComponent}>
          <TextComponent
            text="Select beneficiary bank"
            color={appColors.gray}
            size={14}
            weight="400"
            styles={styles.formDescription}
          />
        </RowComponent>

        {/* <Select
        selectedValue={service}
        minWidth="200"
        accessibilityLabel="Choose Service"
        placeholder="Choose Service"
        _selectedItem={{
          bg: 'teal.600',
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        borderWidth={0}
        onValueChange={itemValue => setService(itemValue)}
        fontSize={18}
        fontWeight={600}
        // dropdownIcon={
        //   <View>
        //     <Image
        //       source={require('../../assets/images/icons/icon-dropdown-blue.svg')}
        //       style={styles.imageRightCard}
        //     />
        //   </View>
        // }
      >
        <Select.Item label="UX Research" value="ux" />
        <Select.Item label="Web Development" value="web" />
        <Select.Item label="Cross Platform Development" value="cross" />
        <Select.Item label="UI Designing" value="ui" />
        <Select.Item label="Backend Development" value="backend" />
      </Select> */}
      </CardComponent>
    </>
  );
};

export default observer(BeneficiaryBankCard);
