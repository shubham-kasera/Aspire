import React, {FC} from 'react';
import {Modalize} from 'react-native-modalize';
import {Platform, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {hp} from '../../styles/globalStyles';

interface BottomSheet {
  children?: React.ReactNode;
  childrenStyle?: StyleProp<ViewStyle>;
}

const BottomSheet: FC<BottomSheet> = props => {
  return (
    <Modalize
      alwaysOpen={Platform.OS == 'ios' ? hp('60%') : hp('64%')}
      modalTopOffset={hp('16%')}
      overlayStyle={styles.overlayStyle}
      modalStyle={styles.modalStyle}
      withHandle={false}
      childrenStyle={props.childrenStyle}
      scrollViewProps={{showsVerticalScrollIndicator: false}}
      children={props.children}
    />
  );
};

const styles = StyleSheet.create({
  modalStyle: {
    alignItems: 'center',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  overlayStyle: {
    backgroundColor: 'transparent',
  },
});

export default BottomSheet;
