import React, {FC} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import {size, type} from '../../theme/fonts';
import {formatAmount} from '../../utils/Helpers';

interface ProgressBar {
  title: string;
  spendings: string;
  limit: string;
  currency?: string;
}

const ProgressBarComponent: FC<ProgressBar> = props => {
  return (
    <>
      <View style={styles.rowBetween}>
        <Text style={styles.title}>{props.title}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.title, {color: '#01D167'}]}>
            {`${props.currency}${formatAmount(props.spendings)} `}
          </Text>
          <Text style={[styles.title, {color: '#22222233'}]}>
            {`| ${props.currency}${formatAmount(props.limit)}`}
          </Text>
        </View>
      </View>
      <ProgressBar
        progress={Number(props.spendings) / Number(props.limit)}
        color={'#01D167'}
        style={styles.ProgressBar}
      />
    </>
  );
};

const styles = StyleSheet.create({
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ProgressBar: {
    height: 15,
    borderRadius: 30,
    backgroundColor: '#e5faf0',
    marginTop: '2%',
  },
  title: {
    color: '#222222',
    fontSize: size.font13,
    fontFamily: type.avenirMedium,
  },
});

export default ProgressBarComponent;
