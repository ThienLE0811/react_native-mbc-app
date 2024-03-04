import React from 'react';
import {CardComponent, InputComponent, RowComponent, TextComponent} from '..';
import {StyleSheet} from 'react-native';
import {appColors} from '../../constansts/appColors';
import {observer} from 'mobx-react';
import {Control, UseFormRegister, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useStore} from '../../store';
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
});

const DescriptionCard = ({
  onBlur,
  control,
  name,
  defaultValue,
  register,
}: {
  onSelect: (item: AccountInfoBeneficiary) => void;
  onBlur: (number: number) => void;
  control: Control<{}, any, {}>;
  name: string;
  defaultValue?: string;
  register: UseFormRegister<any>;
}) => {
  const {transferStore} = useStore();

  register(name, {
    onBlur: e => console.log('hey'),
    onChange: e =>
      transferStore.setAccountInfoBeneficiary({
        ...transferStore.accountInfoBeneficiary,
        description: e.target.value,
      }),
  });

  return (
    <CardComponent styles={styles.cardComponent}>
      <RowComponent justify="space-between" noStylesGlobal>
        <TextComponent
          text="Description"
          size={14}
          weight="600"
          color={appColors.gray}
        />

        {/* <TextComponent
          text="CUSTOMER NAME transfers"
          color={appColors.title2}
          size={16}
          weight="400"
          styles={styles.formTotal}
        /> */}
        <InputComponent
          placeHolder="Enter Description"
          allowClear
          name={name}
          control={control}
          defaultValue={defaultValue}
          type="default"
        />
      </RowComponent>
    </CardComponent>
  );
};

export default observer(DescriptionCard);
