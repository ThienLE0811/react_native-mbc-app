import React from 'react';
import {CardComponent, InputComponent, RowComponent, TextComponent} from '..';
import {StyleSheet} from 'react-native';
import {appColors} from '../../constansts/appColors';
import {observer} from 'mobx-react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
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

const schema = yup.object().shape({});

const DescriptionCard = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({resolver: yupResolver(schema)});

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
          placeHolder="Nhập tiêu đề bài viết"
          allowClear
          name="titleVi"
          control={control}
        />
      </RowComponent>
    </CardComponent>
  );
};

export default observer(DescriptionCard);
