import React, {FC} from 'react';
import {
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  Text,
  Platform,
} from 'react-native';
import {Button} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {flexRow, hp} from '../../styles/globalStyles';
import {size, type} from '../../theme/fonts';

interface Button {
  title: string;
  icon: string;
  buttonStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const ToggleButton: FC<Button> = props => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[flexRow.between, styles.showCardWrapper, props.buttonStyle]}
      onPress={props.onPress}>
      <MaterialIcons name={props.icon} color="#01D167" size={hp('2.70%')} />
      <Text style={[styles.showCardText, props.labelStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  showCardWrapper: {
    alignSelf: 'flex-end',
    backgroundColor: '#fff',
    paddingHorizontal: '3%',
    paddingTop: 7,
    paddingBottom: Platform.OS == 'ios' ? hp('3%') : 30,
    borderRadius: 6,
    marginBottom: -22,
    width: '45%',
  },
  showCardText: {
    color: '#01D167',
    fontSize: size.font12,
    fontFamily: type.avenirDemi,
    marginLeft: '2%',
  },
});

export default ToggleButton;
