import React, {createContext, useContext} from 'react';
import {UseAlertProps, ShowAlertTypes} from './index';
import useAlert from './AsyncAlert';

type ShowAlertFunction = (options: ShowAlertTypes) => Promise<boolean>;

const AlertContext = createContext<ShowAlertFunction | undefined>(undefined);

export const useShowAlert = (): ShowAlertFunction | undefined =>
  useContext(AlertContext);

const AlertProvider: React.FC<{
  renderAlert: UseAlertProps['renderAlert'];
  children: React.ReactNode;
}> = ({children, renderAlert}) => {
  const {showAlert, AlertComp} = useAlert({
    renderAlert: renderAlert,
  });

  return (
    <AlertContext.Provider value={showAlert}>
      {children}
      <AlertComp />
    </AlertContext.Provider>
  );
};

export default AlertProvider;
