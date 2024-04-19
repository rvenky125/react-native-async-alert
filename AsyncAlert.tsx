import React, {useRef} from 'react';
import {useState} from 'react';
import {Text} from 'react-native';
import {DefAlert} from './DefAlert';
import {ShowAlertTypes, UseAlertProps, UseAlertReturnType} from './index';

const useAlert = ({
  renderAlert,
}: {
  renderAlert: UseAlertProps['renderAlert'];
}): UseAlertReturnType => {
  const [visible, setVisible] = useState(false);
  const [resolveFn, setResolveFn] = useState<((value: boolean) => void) | null>(
    null,
  );
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [alertData, setAlertData] = useState<object | null>(null);
  const [hideCancel, setHideCancel] = useState(false);

  const onUserEvent = useRef<(event: any) => void>();

  const showAlert = ({
    title,
    text,
    alertData,
    onEvent,
    hideCancel,
  }: ShowAlertTypes): Promise<boolean> => {
    if (onEvent) {
      onUserEvent.current = onEvent;
    }

    if (!alertData && !!renderAlert) {
      console.error(
        'You need to provide alert data while using a custom alert',
      );
      return Promise.reject(
        new Error('Alert data is required for custom alert'),
      );
    }

    if (!renderAlert && alertData) {
      console.warn(
        'There is no need to provide alert data while not providing the custom alert in the provider',
      );
    }

    if (alertData && !!renderAlert) {
      setAlertData(alertData);
    } else {
      setTitle(title ?? "");
      setText(text ?? "");
      setHideCancel(!!hideCancel);
    }

    setVisible(true);
    return new Promise<boolean>(resolve => {
      setResolveFn(() => resolve);
    });
  };

  const onClose = (): void => {
    setVisible(false);
    if (resolveFn) {
      resolveFn(false);
    }
  };

  const handleButtonPress = (): void => {
    setVisible(false);
    if (resolveFn) {
      resolveFn(true);
    }
  };

  const AlertComp: React.FC = () =>
    renderAlert ? (
      renderAlert({
        alertData,
        visible,
        hideCancel,
        text,
        title,
        onEvent: onUserEvent.current,
        onClose,
      })
    ) : (
      <DefAlert
        title={title}
        renderBody={() => <Text style={{color: 'black'}}>{text}</Text>}
        onClose={onClose}
        onOk={handleButtonPress}
        isAlertVisible={!!visible}
        hideCancel={hideCancel}
      />
    );

  return {
    showAlert,
    AlertComp,
  };
};

export default useAlert;
