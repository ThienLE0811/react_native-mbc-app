import React from 'react';
import {CardComponent, InputComponent, RowComponent, TextComponent} from '..';
import {StyleSheet, View} from 'react-native';
import {appColors} from '../../constansts/appColors';
import {observer} from 'mobx-react';
import {ArchiveBook} from 'iconsax-react-native';
import {Control, UseFormRegister} from 'react-hook-form';

const styles = StyleSheet.create({
  sectionComponent: {
    flexDirection: 'column',
    gap: 4,
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
  styleInput: {
    fontSize: 16,
    fontWeight: '400',
    color: appColors.title2,
  },
});

const AmountCard = ({
  onSelect,
  control,
  name,
  register,
}: {
  onSelect: (item: AccountInfoBeneficiary) => void;
  control: Control<{}, any, {}>;
  name: string;
  defaultValue?: number;
  register: UseFormRegister<any>;
}) => {
  register(name, {
    onBlur: e => console.log('hê nhô:: ', e),
  });

  return (
    <CardComponent styles={styles.cardComponent}>
      <RowComponent justify="space-between" noStylesGlobal>
        <TextComponent
          text="Amount"
          size={14}
          weight="600"
          color={appColors.gray}
        />

        <InputComponent
          placeHolder="Enter Amount Number"
          allowClear
          name={name}
          control={control}
          maxLength={10}
          type="numeric"
          styleInput={styles.styleInput}
        />
      </RowComponent>
    </CardComponent>
  );
};

export default observer(AmountCard);
