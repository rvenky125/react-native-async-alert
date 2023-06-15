import React, {createContext, useContext} from 'react';
import useAlert from './AsyncAlert';

const AlertContext = createContext();

export const useShowAlert = () => useContext(AlertContext);

const AlertProvider = ({children, Alert}) => {
  const {showAlert, AlertComp} = useAlert({
    AlertComponent: Alert
  });

  return (
    <AlertContext.Provider value={showAlert}>
      {children}
      <AlertComp />
    </AlertContext.Provider>
  );
};

export default AlertProvider;