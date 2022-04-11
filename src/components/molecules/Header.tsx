import React, {FC} from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {size, type} from '../../theme/fonts';
import {wp, hp} from '../../styles/globalStyles';

interface Header {
  title?: string;
  leftIcon?: boolean;
  onBackPress?: () => void;
}

const Header: FC<Header> = props => {
  return (
    <View style={styles.headerWrapper}>
      {!props.leftIcon ? (
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      ) : (
        <TouchableOpacity activeOpacity={1} onPress={props.onBackPress}>
          <Feather name={'chevron-left'} color="#fff" size={hp('3.5%')} />
        </TouchableOpacity>
      )}

      <Image
        resizeMode="contain"
        style={styles.logoStyle}
        source={require('../../assets/images/Logo.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    height: hp('7.5%'),
    width: wp('100%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
  },
  logoStyle: {
    width: '7.5%',
  },
  titleWrapper: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: size.font24,
    fontFamily: type.avenirBold,
    color: '#fff',
    marginBottom: -10,
  },
});

export default Header;
