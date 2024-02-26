import React from 'react';
import {RowComponent, TextComponent} from '..';
import {TouchableOpacity} from 'react-native';
import transferStore from '../../stores/transferStore';
import {appColors} from '../../constansts/appColors';

const RowSetColor = () => {
  const setColorCard = (color: string) => {
    transferStore.setBgColorCard(color);
  };

  return (
    <RowComponent justify="space-between">
      <TouchableOpacity onPress={() => setColorCard(appColors.primary)}>
        <TextComponent text="Set Color Card Primary" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setColorCard(appColors.orange)}>
        <TextComponent text="Set Color Card Orange" />
      </TouchableOpacity>
    </RowComponent>
  );
};

export default RowSetColor;
