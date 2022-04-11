import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Home,
  DebitCard,
  Payments,
  Credit,
  Profile,
  SpendingLimit,
} from '../screens';
import {
  AccountIcon,
  CardIcon,
  CreditIcon,
  HomeIcon,
  PaymentsIcon,
} from '../assets/images';
import {StyleSheet} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

export type MainStackParamList = {
  TabStack: undefined;
  SpendingLimit: undefined;
};

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator<MainStackParamList>();

function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="DebitCard"
      activeColor="#01D167"
      inactiveColor="#DDDDDD"
      barStyle={[styles.tabBarStyle, globalStyles.shadow23]}
      shifting={false}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <HomeIcon width="100%" height="100%" fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="DebitCard"
        component={DebitCard}
        options={{
          tabBarLabel: 'Debit Card',
          tabBarIcon: ({color}) => (
            <CardIcon width="100%" height="100%" fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Payments"
        component={Payments}
        options={{
          tabBarLabel: 'Payments',
          tabBarIcon: ({color}) => (
            <PaymentsIcon width="100%" height="100%" fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Credit"
        component={Credit}
        options={{
          tabBarLabel: 'Credit',
          tabBarIcon: ({color}) => (
            <CreditIcon width="100%" height="100%" fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <AccountIcon width="100%" height="100%" fill={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Routes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabStack" component={TabStack} />
      <Stack.Screen name="SpendingLimit" component={SpendingLimit} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#FFFFFF',
    height: '7.6%',
    justifyContent: 'center',
  },
});

export default Routes;
