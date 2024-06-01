import React from 'react';
import {Modal, Pressable, StyleSheet, View, Dimensions, Button, Text} from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
const scale =  SCREEN_WIDTH / 375;

export const isTablet = SCREEN_HEIGHT / SCREEN_WIDTH < 1.6;

export function wp(percentage) {
  const value = (percentage * SCREEN_WIDTH) / 100;
  return Math.round(value);
}

export function moderateScale(size) {
  const newSize = size * scale;
  if (isTablet) {
    return Math.round(newSize) - wp(1);
  } else {
    return Math.round(newSize);
  }
}

const grayScale = "grey"

const DefAlertDialog = ({
  visible,
  title,
  text,
  confirmText,
  dismissText,
  onConfirm,
  onDismiss,
  hideCancel,
}) => {

  return (
    <Modal transparent visible={visible}>
      <View style={localStyles.parentContainer}>
        <Pressable
          onPress={onDismiss}
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
          }}
        />
        <View
          style={[
            localStyles.container,
            {backgroundColor: grayScale},
          ]}>
          <Info
            width={moderateScale(80)}
            height={moderateScale(80)}
            style={{marginBottom: moderateScale(15)}}
          />

          <CText type={'B22'} align={'center'}>
            {title}
          </CText>
          {text ? (
            typeof text == 'string' ? (
              <CText
                type={'R14'}
                style={{marginVertical: moderateScale(10)}}
                color={colors.grayScale5}>
                {text}
              </CText>
            ) : (
              text
            )
          ) : null}

          <CButton
            containerStyle={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: moderateScale(10),
              borderRadius: moderateScale(10),
            }}
            title={confirmText ?? 'Confirm'}
            onPress={onConfirm}
          />
          {!hideCancel ? (
            <DefOutlinedBtn
              style={{
                width: '100%',
                padding: moderateScale(9),
                borderRadius: moderateScale(50),
                marginTop: moderateScale(8),
                borderRadius: moderateScale(10),
              }}
              title={dismissText ?? 'Cancel'}
              onPress={onDismiss}
            />
          ) : null}
        </View>
      </View>
    </Modal>
  );
};

export default DefAlertDialog;

const localStyles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH * 0.8,
    position: 'absolute',
    borderRadius: moderateScale(10),
    alignItems: 'center',
    paddingHorizontal: moderateScale(22),
    paddingVertical: moderateScale(28),
  },
  parentContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
