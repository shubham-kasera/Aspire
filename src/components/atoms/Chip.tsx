import React, {FC} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {hp} from '../../styles/globalStyles';
import {size, type} from '../../theme/fonts';

interface Chip {
  title: string;
  wrapperStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const Chip: FC<Chip> = props => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[styles.ChipWrapper, props.wrapperStyle]}
      onPress={props.onPress}>
      <Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ChipWrapper: {
    backgroundColor: '#01D167',
    paddingVertical: hp('0.5%'),
    paddingHorizontal: hp('1.8%'),
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: size.font12,
    fontFamily: type.avenirBold,
  },
});

export default Chip;
