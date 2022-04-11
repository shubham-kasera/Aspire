import React, {FC} from 'react';
import {Image, View, Text, StyleSheet, Platform} from 'react-native';
import {flexRow, globalStyles, wp, hp} from '../../styles/globalStyles';
import {size, type} from '../../theme/fonts';

interface Card {
  cardHolderName: string;
  cardNum: string;
  expiryDate: string;
  cvv: string;
  dataVisible: boolean;
}

const CardComponent: FC<Card> = props => {
  return (
    <View style={[styles.CardWrapper, globalStyles.shadow4]}>
      <Image
        resizeMode="contain"
        style={styles.upperLogo}
        source={require('../../assets/images/AspireLogo.png')}
      />
      <View
        style={{
          marginTop: '2%',
          flex: 1,
          justifyContent: 'flex-end',
          paddingBottom: '10%',
        }}>
        <Text style={styles.cardHolderName}>{props.cardHolderName}</Text>
        <View style={[flexRow.between, styles.cardNumberWrapper]}>
          {[...props.cardNum].map((element, index) => {
            if (index < 15 && !props.dataVisible) {
              if (element != '-') {
                return <View key={index} style={styles.dotStyle} />;
              } else {
                return <View key={index} style={{marginHorizontal: 7}} />;
              }
            } else {
              return (
                <Text key={index} style={styles.cardNumber}>
                  {element != '-' ? element : ' '}
                </Text>
              );
            }
          })}
        </View>
        <View style={[flexRow.between, styles.subDetailsWrapper]}>
          <Text style={styles.subDetails}>Thru: {props.expiryDate}</Text>
          <View
            style={[
              flexRow.between,
              {width: '40%', justifyContent: 'flex-start'},
            ]}>
            <Text style={styles.subDetails}>CVV:</Text>
            {!props.dataVisible ? (
              <Text style={styles.cvvNum}>***</Text>
            ) : (
              <Text style={[styles.subDetails, {marginLeft: 5}]}>
                {props.cvv}
              </Text>
            )}
          </View>
        </View>
        <Image
          resizeMode="contain"
          style={styles.bottomLogo}
          source={require('../../assets/images/VisaLogo.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  CardWrapper: {
    width: wp('90%'),
    height: Platform.OS == 'ios' ? hp('26%') : hp('29%'),
    backgroundColor: '#01D167',
    borderRadius: 12,
    paddingHorizontal: '5%',
    paddingVertical: '3%',
    flex: 1,
  },
  upperLogo: {
    alignSelf: 'flex-end',
    width: '22.5%',
  },
  cardHolderName: {
    color: '#fff',
    fontSize: size.font22,
    fontFamily: type.avenirBold,
  },
  cardNumberWrapper: {
    marginTop: '9%',
    width: '85%',
  },
  dotStyle: {
    backgroundColor: '#fff',
    width: 9,
    height: 9,
    borderRadius: 20,
  },
  cardNumber: {
    color: '#fff',
    fontSize: size.font14,
    fontFamily: type.avenirDemi,
  },
  subDetailsWrapper: {
    marginTop: '4%',
    width: '54%',
    height: '20%',
  },
  subDetails: {
    color: '#fff',
    fontSize: size.font13,
    fontFamily: type.avenirDemi,
  },
  cvvNum: {
    color: '#fff',
    fontSize: size.font22,
    fontFamily: type.avenirDemi,
    marginBottom: -9,
  },
  bottomLogo: {
    alignSelf: 'flex-end',
    width: '18%',
    position: 'absolute',
    bottom: 0,
  },
});

export default CardComponent;
