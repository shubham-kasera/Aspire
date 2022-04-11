import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../navigation/Routes';
import {flexRow, globalStyles, wp, hp} from '../styles/globalStyles';
import {size, type} from '../theme/fonts';
import {Chip, ToggleButton} from '../components/atoms';
import {
  Header,
  BottomSheet,
  CardComponent,
  IconListItem,
  ProgressBarComponent,
} from '../components/molecules';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getUserData, updateUserData} from '../stores/Services';
import {ActivityIndicator} from 'react-native-paper';
import {IUser} from '../stores/ResponseInterface';
import {formatAmount} from '../utils/Helpers';
import {useSelector, useDispatch} from 'react-redux';
import {userAction} from '../stores/actions';
import {State} from '../stores/reducers';

type DebitCardScreenProp = NativeStackNavigationProp<
  MainStackParamList,
  'TabStack'
>;

const DebitCard = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dataVisible, setDataVisible] = useState<boolean>(false);
  const [isLimitOn, setIsLimitOn] = useState<boolean>(false);
  const navigation = useNavigation<DebitCardScreenProp>();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const user = useSelector((state: State) => state.user);

  useEffect(() => {
    let isMounted = true;
    getData(isMounted);
    return () => {
      isMounted = false;
    };
  }, [isFocused]);

  const getData = (isMounted: boolean) => {
    if (!isMounted) return;
    setIsLoading(true);
    getUserData('1', function (res: IUser) {
      if (res) {
        setIsLimitOn(res.is_spending_limit);
        dispatch(userAction.setUserData(res));
        setIsLoading(false);
      }
    });
  };

  const toggleWeeklySpendings = () => {
    setIsLimitOn(!isLimitOn);
    if (!isLimitOn) {
      navigation.navigate('SpendingLimit');
    } else {
      try {
        const updateData = {
          is_spending_limit: false,
        };
        updateUserData(user.userData.id, updateData, function (res: IUser) {
          if (res) {
            dispatch(userAction.setUserData(res));
            setIsLimitOn(res.is_spending_limit);
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (isLoading) {
    return (
      <SafeAreaView style={[globalStyles.container, flexRow.center]}>
        <ActivityIndicator animating={true} color={'#01D167'} size="large" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={globalStyles.container}>
      <Header title="Debit Card" />
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceTitle}>Available Balance</Text>
        <View style={styles.balanceWrapper}>
          <Chip title={user.userData.currency} />
          <Text style={styles.balanceText}>
            {formatAmount(user.userData.available_balance)}
          </Text>
        </View>
      </View>
      <BottomSheet childrenStyle={{marginTop: '-25%'}}>
        <ToggleButton
          title={!dataVisible ? 'Show card number' : 'Hide card number'}
          icon={!dataVisible ? 'visibility' : 'visibility-off'}
          onPress={() => setDataVisible(!dataVisible)}
        />
        <CardComponent
          cardHolderName={user.userData.card_holdername}
          cardNum={user.userData.card_number}
          expiryDate={user.userData.thru}
          cvv={user.userData.cvv}
          dataVisible={dataVisible}
        />
        {isLimitOn ? (
          <View style={{marginTop: '10%'}}>
            <ProgressBarComponent
              title="Debit card spending limit"
              currency={user.userData.currency}
              spendings={user.userData.spent}
              limit={user.userData.spending_limit}
            />
          </View>
        ) : null}
        <View style={styles.listWrapper}>
          <IconListItem
            title="Top-up account"
            desc="Deposit money to your account to use with card"
            logo={require('../assets/images/Topup.png')}
          />
          <IconListItem
            title="Weekly spending limit"
            desc="You haven’t set any spending limit on card"
            logo={require('../assets/images/Spending.png')}
            showSwitch={true}
            isSwitchOn={isLimitOn}
            onValueChange={toggleWeeklySpendings}
            onPress={() => {
              isLimitOn ? navigation.navigate('SpendingLimit') : null;
            }}
          />
          <IconListItem
            title="Freeze card"
            desc="Your debit card is currently active"
            logo={require('../assets/images/Freeze.png')}
            showSwitch={true}
          />
          <IconListItem
            title="Get a new card"
            desc="This deactivates your current debit card"
            logo={require('../assets/images/NewCard.png')}
          />
          <IconListItem
            title="Deactivated cards"
            desc="Your previously deactivated cards"
            logo={require('../assets/images/Deactivate.png')}
          />
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  balanceContainer: {
    paddingHorizontal: '5%',
    paddingVertical: '7%',
  },
  balanceTitle: {
    color: '#fff',
    fontSize: size.font14,
    fontFamily: type.avenirMedium,
  },
  balanceWrapper: {
    marginTop: hp('1.8%'),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  balanceText: {
    fontSize: size.font24,
    fontFamily: type.avenirBold,
    color: '#fff',
    marginLeft: wp('4%'),
  },
  listWrapper: {
    marginTop: '5%',
  },
});

export default DebitCard;
