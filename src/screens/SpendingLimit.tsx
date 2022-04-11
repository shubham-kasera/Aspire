import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  StyleProp,
  ViewStyle,
  Platform,
} from 'react-native';
import {MainStackParamList} from '../navigation/Routes';
import {Chip, ButtonComponent} from '../components/atoms';
import {Header} from '../components/molecules';
import {flexRow, globalStyles, wp, hp} from '../styles/globalStyles';
import {size, type} from '../theme/fonts';
import {formatAmount} from '../utils/Helpers';
import {updateUserData} from '../stores/Services';
import {IUser} from '../stores/ResponseInterface';
import {useSelector, useDispatch} from 'react-redux';
import {userAction} from '../stores/actions';
import {State} from '../stores/reducers';
import {SafeAreaView} from 'react-native-safe-area-context';

type DebitCardScreenProp = NativeStackNavigationProp<
  MainStackParamList,
  'SpendingLimit'
>;

const SpendingLimit = () => {
  const navigation = useNavigation<DebitCardScreenProp>();
  const [spending, setSpending] = useState<string>('');
  const dispatch = useDispatch();
  const user = useSelector((state: State) => state.user);

  const handleChange = (e: string) => setSpending(e.replace(/,/g, ''));

  const handleSubmit = () => {
    try {
      const updateData = {
        spending_limit: spending,
        is_spending_limit: true,
      };

      updateUserData(user.userData.id, updateData, function (res: IUser) {
        if (res) {
          navigation.navigate('TabStack');
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <Header leftIcon onBackPress={() => navigation.goBack()} />
      <Text style={styles.title}>Spending limit</Text>
      <View
        style={[
          styles.childrenWrapper,
          Platform.OS == 'ios'
            ? {position: 'absolute', bottom: 0, height: hp('78%')}
            : {marginTop: '10%'},
        ]}>
        <View style={[flexRow.start, {marginBottom: '2%'}]}>
          <Image
            resizeMode="contain"
            style={styles.labelIcon}
            source={require('../assets/images/PickupCar.png')}
          />
          <Text style={styles.inputLabel}>
            Set a weekly debit card spending limit
          </Text>
        </View>
        <View style={[flexRow.start, styles.inputWrapper]}>
          <Chip title="S$" />
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            onChangeText={val => handleChange(val)}
            value={formatAmount(spending)}
          />
        </View>
        <Text style={styles.secondaryText}>
          Here weekly means the last 7 days - not the calendar week
        </Text>
        <View style={flexRow.between}>
          <Chip
            title="S$ 5,000"
            wrapperStyle={styles.chipWrapper}
            titleStyle={styles.chipTitle as StyleProp<ViewStyle>}
            onPress={() => setSpending('5000')}
          />
          <Chip
            title="S$ 10,000"
            wrapperStyle={styles.chipWrapper}
            titleStyle={styles.chipTitle as StyleProp<ViewStyle>}
            onPress={() => setSpending('10000')}
          />
          <Chip
            title="S$ 15,000"
            wrapperStyle={styles.chipWrapper}
            titleStyle={styles.chipTitle as StyleProp<ViewStyle>}
            onPress={() => setSpending('15000')}
          />
        </View>
      </View>
      <ButtonComponent
        title="save"
        disabled={spending ? false : true}
        onPress={handleSubmit}
        // onPress={() => navigation.navigate('TabStack')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: size.font24,
    color: '#fff',
    fontFamily: type.avenirBold,
    marginHorizontal: '7%',
    marginTop: '1%',
  },
  childrenWrapper: {
    flex: 1,
    width: wp('100%'),
    backgroundColor: '#fff',
    paddingVertical: '8%',
    paddingHorizontal: '7%',
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
  },
  inputLabel: {
    fontSize: size.font14,
    fontFamily: type.avenirMedium,
    marginLeft: '3%',
    color: '#222',
  },
  labelIcon: {
    alignSelf: 'center',
    width: '5%',
  },
  inputWrapper: {
    width: '100%',
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
    marginBottom: '5%',
  },
  secondaryText: {
    fontSize: size.font13,
    color: '#22222266',
    marginBottom: '10%',
    fontFamily: type.avenirRegular,
  },
  chipWrapper: {
    width: wp('26%'),
    height: hp('5%'),
    backgroundColor: '#20D1671A',
    borderRadius: 5,
  },
  chipTitle: {
    fontSize: size.font12,
    color: '#01D167',
  },
  textInput: {
    width: '80%',
    marginLeft: '2%',
    fontSize: size.font24,
    color: '#222',
    fontFamily: type.avenirBold,
  },
});

export default SpendingLimit;
