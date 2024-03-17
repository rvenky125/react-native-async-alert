import React from 'react';
import {Modal, View, TouchableOpacity, Text, Dimensions} from 'react-native';
import {Spacing} from './Spacing';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const DefAlert = ({
  isAlertVisible = false,
  onClose,
  title,
  renderBody,
  hideCancel,
  onOk,
}) => {
  return (
    <Modal
      animationType={'fade'}
      visible={isAlertVisible}
      onRequestClose={() => onClose()}
      transparent
      onDismiss={() => onClose()}>
      <View
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            padding: Spacing.SpaceMedium,
            width: SCREEN_WIDTH / 1.2,
            elevation: Spacing.SpaceMedium,
            borderRadius: Spacing.SpaceLarge,
            paddingEnd: Spacing.SpaceMedium,
          }}>
          <Text style={[{color: 'black', fontSize: 20}]}>{title}</Text>
          {renderBody ? renderBody() : null}

          {hideCancel ? (
            <TouchableOpacity
              style={{
                paddingHorizontal: Spacing.SpaceLarge * 1.5,
                paddingVertical: Spacing.SpaceSemiSmall,
                borderRadius: Spacing.SpaceSemiSmall,
                marginHorizontal: Spacing.SpaceSmall,
                backgroundColor: 'white',
                alignSelf: 'center',
              }}
              onPress={onOk}>
              <Text
                style={{
                  color: 'white',
                  paddingHorizontal: Spacing.SpaceSemiSmall,
                }}>
                Ok
              </Text>
            </TouchableOpacity>
          ) : (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: Spacing.SpaceSmall,
                alignSelf: 'flex-end',
              }}>
              <TouchableOpacity onPress={onClose}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: Spacing.SpaceMedium,
                  }}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  paddingHorizontal: Spacing.SpaceSmall,
                  paddingVertical: Spacing.SpaceVerySmall,
                  borderRadius: Spacing.SpaceSemiSmall,
                  marginStart: Spacing.SpaceMedium,
                }}
                onPress={onOk}>
                <Text
                  style={{
                    color: 'black',
                    paddingHorizontal: Spacing.SpaceSemiSmall,
                    fontSize: Spacing.SpaceMedium,
                  }}>
                  Ok
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};
