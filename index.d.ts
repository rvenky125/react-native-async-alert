import React from 'react';

type ShowAlertTypes = {
  title?: string;
  text?: string;
  alertData?: object | null | undefined;
  onEvent?: ((event: any) => void) | null | undefined;
  hideCancel?: boolean | null | undefined;
};

type RenderAlertProps = {
  alertData: object | null | undefined;
  visible: boolean | null | undefined;
  onEvent: ((event: any) => void) | null | undefined;
  onPressCancel: (() => void) | null | undefined;
  onPressOk: (() => void) | null | undefined;
  title?: string;
  text?: string;
  hideCancel?: boolean | null | undefined
};

type UseAlertProps = {
  renderAlert?: (props: RenderAlertProps) => React.ReactElement;
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
  RenderAlertProps,
  UseAlertProps,
  UseAlertReturnType,
};
