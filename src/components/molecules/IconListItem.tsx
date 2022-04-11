import React, {FC} from 'react';
import {Image, Platform, StyleSheet} from 'react-native';
import {List, Switch} from 'react-native-paper';
import {size, type} from '../../theme/fonts';
import {hp} from '../../styles/globalStyles';

interface IconListItem {
  title: string;
  desc?: string;
  logo: Object;
  showSwitch?: boolean;
  onPress?: () => void;
  isSwitchOn?: boolean;
  onValueChange?: () => void;
}

const IconListItem: FC<IconListItem> = props => {
  return (
    <List.Item
      title={props.title}
      description={props.desc}
      titleStyle={styles.titleStyle}
      descriptionStyle={styles.descriptionStyle}
      left={() => (
        <Image
          resizeMode="contain"
          style={{
            alignSelf: 'center',
            width: '8.5%',
            height: '100%',
            marginRight: 10,
          }}
          source={props.logo}
        />
      )}
      right={() =>
        props.showSwitch ? (
          <Switch
            value={props.isSwitchOn}
            onValueChange={props.onValueChange}
            color="#01D167"
            style={Platform.OS == 'ios' ? styles.switchStyle : null}
          />
        ) : null
      }
      onPress={props.onPress}
      rippleColor={props.showSwitch ? '#fff' : 'rgba(0, 0, 0, .05)'}
      style={{paddingLeft: 0}}
    />
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: size.font14,
    color: '#25345F',
    fontFamily: type.avenirMedium,
  },
  descriptionStyle: {
    fontSize: size.font13,
    color: '#22222266',
    fontFamily: type.avenirRegular,
    marginTop: 5,
  },
  switchStyle: {
    transform: [{scaleX: 0.8}, {scaleY: 0.8}],
    alignSelf: 'center',
  },
});

export default IconListItem;
