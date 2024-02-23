import {TouchableOpacity, StyleProp, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';

import {appColors} from '../constansts/appColors';
import {globalStyles} from '../styles/globalStyles';

interface Props {
  children: ReactNode;
  bgColor?: string;
  styles?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const CardComponent = (props: Props) => {
  const {children, bgColor, styles, onPress} = props;
  return (
    <TouchableOpacity
      style={[
        globalStyles.card,
        {
          backgroundColor: bgColor ?? appColors.white,
        },
        styles,
      ]}
      activeOpacity={0.7}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default CardComponent;
