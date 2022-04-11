import React, {FC} from 'react';
import {StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {Button} from 'react-native-paper';
import {hp, wp} from '../../styles/globalStyles';
import {size, type} from '../../theme/fonts';

interface Button {
  title: string;
  disabled?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const ButtonComponent: FC<Button> = props => {
  return (
    <Button
      mode="contained"
      style={[
        styles.buttonStyle,
        props.buttonStyle,
        props.disabled ? {backgroundColor: '#EEE'} : null,
      ]}
      labelStyle={[
        styles.labelStyle,
        props.labelStyle,
        props.disabled ? {color: '#FFF'} : null,
      ]}
      disabled={props.disabled}
      onPress={props.onPress}
      contentStyle={{paddingVertical: '4%'}}>
      {props.title}
    </Button>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: hp('4%'),
    width: wp('70%'),
    borderRadius: 50,
    backgroundColor: '#01D167',
  },
  labelStyle: {
    fontSize: size.font16,
    textTransform: 'capitalize',
    fontFamily: type.avenirDemi,
  },
});

export default ButtonComponent;
