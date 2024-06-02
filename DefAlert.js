import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  Modal,
  Pressable,
  StyleSheet,
  View,
  Dimensions,
  Text,
} from 'react-native';
// import {Svg} from 'react-native-svg';
import Svg, {Path, G, Circle, Rect} from 'react-native-svg';

function Info(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={512}
      height={512}
      viewBox="0 0 48 48"
      enableBackground="new 0 0 512 512"
      {...props}>
      <Path
        fill="#ffd766"
        d="M21.977 3.1A20.97 20.97 0 005.6 34.076a1.021 1.021 0 01.1.788l-2.125 7.071a2 2 0 002.49 2.49l7.072-2.125a1.025 1.025 0 01.787.1A20.825 20.825 0 0024 45a20.981 20.981 0 0020.9-18.979A21.008 21.008 0 0021.977 3.1z"
        data-original="#ffd766"
      />
      <G fill="#fff">
        <Circle cx={24} cy={17} r={3} data-original="#ffffff" />
        <Path d="M22 22h4v13h-4z" data-original="#ffffff" />
        <Rect
          width={10}
          height={3}
          x={19}
          y={32}
          rx={1.5}
          data-original="#ffffff"
        />
        <Rect
          width={8}
          height={3}
          x={20}
          y={22}
          rx={1.5}
          data-original="#ffffff"
        />
      </G>
    </Svg>
  );
}

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
const scale = SCREEN_WIDTH / 375;

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

const grayScale = 'grey';

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
        <View style={[localStyles.container, {backgroundColor: '#FFFFFF'}]}>
          <Info
            width={moderateScale(80)}
            height={moderateScale(80)}
            style={{marginBottom: moderateScale(15)}}
          />

          <Text style={{fontSize: 22, fontWeight: '700', textAlign: 'center'}}>
            {title}
          </Text>
          {text ? (
            typeof text == 'string' ? (
              <Text style={{marginVertical: moderateScale(10), fontSize: 14}}>
                {text}
              </Text>
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
                paddingHorizontal: moderateScale(9),
                paddingVertical: moderateScale(7),
                borderRadius: moderateScale(50),
                marginTop: moderateScale(4),
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

const DefOutlinedBtn = ({title, style, onPress, titleStyle, titleColor}) => {
  return (
    <TouchableOpacity
      style={[localStyles.btnContainer, {backgroundColor: '#F8F8FF'}, style]}
      onPress={onPress}>
      <Text
        color={titleColor}
        style={[titleStyle, {fontSize: 14, fontWeight: '600'}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

function CButton({
  title,
  color,
  onPress,
  containerStyle,
  style,
  icon = null,
  frontIcon = null,
  bgColor = null,
  children,
  disabled,
  ...props
}) {
  return (
    <TouchableOpacity
      style={[
        localStyles.cbtnContainer,
        {flexDirection: 'row', alignItems: 'center'},
        containerStyle,
        bgColor ? {backgroundColor: bgColor} : {backgroundColor: '#000000'},
      ]}
      disabled={disabled}
      onPress={onPress}
      {...props}>
      {frontIcon}
      <Text
        style={[
          {
            fontWeight: '600',
            fontSize: 14,
            marginVertical: 10,
            color: color ? color : '#FFFFFF',
          },
          style,
        ]}>
        {title}
      </Text>
      {icon}
      {children}
    </TouchableOpacity>
  );
}

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
  btnContainer: {
    borderRadius: moderateScale(10),
    borderWidth: 1,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cbtnContainer: {
    // height: moderateScale(100),
    borderRadius: moderateScale(25),
  },
});
