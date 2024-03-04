import React, {ReactNode} from 'react';
import {StyleProp, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import {TextComponent} from '.';
import {globalStyles} from '../styles/globalStyles';
import {appColors} from '../constansts/appColors';

interface Props {
  icon?: ReactNode;
  text: string;
  type?: 'primary' | 'text' | 'link';
  color?: string;
  styles?: StyleProp<ViewStyle>;
  textColor?: string;
  textStyles?: StyleProp<TextStyle>;
  onPress?: () => void;
  iconFlex?: 'right' | 'left';
  disabled?: boolean;
}

const ButtonComponent = (props: Props) => {
  const {
    icon,
    text,
    type,
    color,
    styles,
    textColor,
    textStyles,
    onPress,
    iconFlex,
    disabled,
  } = props;

  return type === 'primary' ? (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled ?? disabled}
      activeOpacity={0.9}
      style={[
        globalStyles.button,
        {backgroundColor: appColors.primary},
        styles,
      ]}>
      {icon && iconFlex === 'left' && icon}
      <TextComponent
        text={text}
        color={textColor ?? appColors.white}
        styles={[
          textStyles,
          {
            marginLeft: icon && iconFlex === 'left' ? 12 : 0,
            textAlign: 'center',
          },
        ]}
        flex={icon && iconFlex === 'right' ? 1 : 1}
      />
      {icon && iconFlex === 'right' && icon}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={onPress}>
      <TextComponent
        text={text}
        color={type === 'link' ? appColors.primary : appColors.text}
        styles={textStyles}
      />
    </TouchableOpacity>
  );
};

export default ButtonComponent;
