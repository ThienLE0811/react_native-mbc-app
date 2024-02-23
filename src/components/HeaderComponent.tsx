import React from 'react';
import {RowComponent, TextComponent} from '.';
import {Image, StatusBar, StyleSheet, TouchableOpacity} from 'react-native';
import {appColors} from '../constansts/appColors';

interface Props {
  title: string;
  goBack?: () => void;
}

const styles = StyleSheet.create({
  title: {
    paddingTop: StatusBar.currentHeight,
    height: 96 - (StatusBar.currentHeight ? StatusBar.currentHeight : 0),
    backgroundColor: appColors.primary,
    paddingHorizontal: 20,
  },
  imageSection: {
    width: 24,
    height: 24,
  },
});

const HeaderComponent = (props: Props) => {
  const {title, goBack} = props;

  return (
    <RowComponent styles={styles.title} justify="space-between">
      <TouchableOpacity onPress={goBack}>
        <Image
          source={require('../assets/images/icons/icon-left-arr.png')}
          style={styles.imageSection}
        />
      </TouchableOpacity>
      <TextComponent
        text={title}
        weight="600"
        color={appColors.white}
        size={20}
      />
      <TouchableOpacity onPress={() => console.log('123')}>
        <Image
          source={require('../assets/images/icons/icon-home.png')}
          style={styles.imageSection}
        />
      </TouchableOpacity>
    </RowComponent>
  );
};

export default HeaderComponent;
