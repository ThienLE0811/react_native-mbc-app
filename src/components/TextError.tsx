import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import {appColors} from '../constansts/appColors';

interface Props {
  //   text: string;
  color?: string;
  size?: number;
  flex?: number;

  styles?: StyleProp<TextStyle>;
  weight?: '100' | '200' | '300' | '400' | '500' | '600' | '700';
  numberOfLine?: number;
  children: any;
}

const TextError = (props: Props) => {
  const {children, size, color, flex, styles, weight, numberOfLine} = props;

  return (
    <Text
      numberOfLines={numberOfLine}
      style={[
        // eslint-disable-next-line react-native/no-inline-styles
        {
          color: color ?? appColors.error,
          flex: flex ?? 0,
          fontSize: size ? size : 14,
          fontWeight: weight ? weight : '400',
        },
        styles,
      ]}>
      {children}
    </Text>
  );
};

export default TextError;
