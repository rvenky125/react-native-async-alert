import React from 'react';

type ShowAlertTypes = {
  title: string;
  text: string;
  alertData: object;
  onEvent: (event: any) => void;
  hideCancel: boolean
};

type RenderAlertComponentProps = {
  alertData: object;
  visible: boolean;
  onEvent: (event: any) => void;
  onClose: () => void;
};

type UseAlertProps = {
  renderAlertComponent: (props: RenderAlertComponentProps) => React.ReactElement;
};

type UseAlertReturnType = {
  showAlert: (options: ShowAlertTypes) => Promise<boolean>;
  AlertComp: React.FC;
};

declare function useAlert(props: UseAlertProps): UseAlertReturnType;
declare const AlertProvider: React.FC<{ renderAlert: UseAlertProps['renderAlertComponent'] }>;

type ShowAlertFunction = (options: ShowAlertTypes) => Promise<boolean>;
declare function useShowAlert(): ShowAlertFunction


export { useAlert, AlertProvider, useShowAlert };
export type { ShowAlertTypes, RenderAlertComponentProps, UseAlertProps, UseAlertReturnType };
