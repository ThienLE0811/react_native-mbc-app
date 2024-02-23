import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import {appColors} from '../constansts/appColors';

interface Props {
  text: string;
  color?: string;
  size?: number;
  flex?: number;
  font?: string;
  styles?: StyleProp<TextStyle>;
  title?: boolean;
  numberOfLine?: number;
  weight?:
    | '500'
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '600'
    | '700'
    | '800'
    | '900';
}

const TextComponent = (props: Props) => {
  const {text, size, color, flex, styles, weight, title, numberOfLine} = props;

  return (
    <Text
      numberOfLines={numberOfLine}
      style={[
        // eslint-disable-next-line react-native/no-inline-styles
        {
          color: color ?? appColors.text,
          flex: flex ?? 0,
          fontSize: size ? size : 14,
          fontWeight: weight ? weight : '500',
        },
        styles,
      ]}>
      {text}
    </Text>
  );
};

export default TextComponent;
