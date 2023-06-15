import React, {useRef} from 'react';
import {useState} from 'react';
import {LogBox, Text} from 'react-native';
import {DefAlert} from './DefAlert';

const useAlert = ({renderAlertComponent} = {renderAlertComponent: undefined}) => {
  const [visible, setVisible] = useState(false);
  const [resolveFn, setResolveFn] = useState(null);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [alertData, setAlertData] = useState(null);

  const onUserEvent = useRef();

  const showAlert = ({title, text, alertData, onEvent}) => {
    if (onEvent) {
      onUserEvent.current = onEvent;
    }

    if (!alertData && renderAlertComponent) {
      console.error('You need provide alert data while using a custom alert');
      return;
    }

    if (!renderAlertComponent && alertData) {
      console.warn(
        'There is no need to provided alert data while not providing the custom alert in provider',
      );
    }

    if (alertData && renderAlertComponent) {
      setAlertData(alertData);
    } else {
      setTitle(title);
      setText(text);
    }

    setVisible(true);
    return new Promise(resolve => {
      setResolveFn(() => resolve);
    });
  };

  const onClose = () => {
    setVisible(false);
    resolveFn(false);
  };

  const handleButtonPress = () => {
    setVisible(false);
    resolveFn(true);
  };

  const AlertComp = () =>
    renderAlertComponent ? (
      renderAlertComponent({
        alertData,
        visible,
        onEvent: onUserEvent.current,
        onClose,
      })
    ) : (
      <DefAlert
        title={title}
        renderBody={() => <Text>{text}</Text>}
        onClose={onClose}
        onOk={handleButtonPress}
        isAlertVisible={visible}
      />
    );

  return {
    showAlert,
    AlertComp,
  };
};

export default useAlert;
