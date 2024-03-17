import React from 'react';

type ShowAlertTypes = {
  title: string;
  text: string;
  alertData: object;
  onEvent: (event: any) => void;
  hideCancel: boolean;
};

type renderAlertProps = {
  alertData: object | null | undefined;
  visible: boolean | null | undefined;
  onEvent: ((event: any) => void) | null | undefined;
  onClose: (() => void) | null | undefined;
};

type UseAlertProps = {
  renderAlert?: (props: renderAlertProps) => React.ReactElement;
  children: React.ReactElement;
};

type UseAlertReturnType = {
  showAlert: (options: ShowAlertTypes) => Promise<boolean>;
  AlertComp: React.FC;
};

declare function useAlert(props: UseAlertProps): UseAlertReturnType;
declare const AlertProvider: React.FC<UseAlertProps>;

type ShowAlertFunction = (options: ShowAlertTypes) => Promise<boolean>;
declare function useShowAlert(): ShowAlertFunction;

export {AlertProvider, useShowAlert};
export type {
  ShowAlertTypes,
  renderAlertProps,
  UseAlertProps,
  UseAlertReturnType,
};
