import React, {ReactNode} from 'react';
import {StyleProp, TouchableOpacity, View, ViewStyle} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

interface Props {
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  styles?: StyleProp<ViewStyle>;
  children: ReactNode;
  onPress?: () => void;
  noStylesGlobal?: boolean;
}

const RowComponent = (props: Props) => {
  const {justify, styles, children, onPress, noStylesGlobal} = props;
  const localStyle = [
    !noStylesGlobal && globalStyles.row,
    {
      justifyContent: justify,
    },
    styles,
  ];

  return onPress ? (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={localStyle}>
      {children}
    </TouchableOpacity>
  ) : (
    <View style={localStyle}>{children}</View>
  );
};

export default RowComponent;
