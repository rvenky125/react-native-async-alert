# react-native-async-alert
<img src="https://github.com/rvenky125/react-native-async-alert/assets/58197145/e59b34e4-acb3-43da-844b-efc4dbc8def7" width="200px" heigth="200px"/>

The "AsyncAlert" library is a powerful tool that allows developers to display alerts or modals asynchronously in their React Native applications. With a simple and intuitive API, it provides a seamless way to handle user interactions and gather responses from alert dialogs.

The library includes the `AlertProvider` component, which serves as a context provider for managing the display of alerts. By wrapping your application with `AlertProvider`, you gain access to the `useShowAlert` hook, which provides a function for showing alerts.

The `showAlert` function, provided by the library, enables you to show alerts dynamically by passing in various options such as the title, text, and additional alert data. It returns a promise that resolves to a boolean value indicating the user's response to the alert.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

![AGPL License](https://img.shields.io/npm/dw/react-native-async-alert)

![Npm Version](https://img.shields.io/npm/v/react-native-async-alert)

## Installation

Install react-native-async-alert with npm

```bash
  npm install react-native-async-alert
```

with yarn

```bash
  yarn add react-native-async-alert
```

## Usage/Examples
<img src="https://github.com/rvenky125/react-native-async-alert/assets/58197145/e095218f-3b2c-48f7-b77f-5240daeafd71" width="300px" heigth="300px"/>

**Using default alert**

Wrap your application with `<AlertProvider>` in top-level files like `index.js` or `App.js`.

```javascript
import {AlertProvider} from 'react-native-async-alert';
import {useShowAlert} from 'react-native-async-alert';

function App() {
  return (
    <AlertProvider>
      <SafeAreaView>
        <RemainingContent />
      </SafeAreaView>
    </AlertProvider>
  );
}
```

```javascript
import React from 'react';
import Button from 'react-native';
import {useShowAlert} from 'react-native-async-alert';

function ExampleScreen() {
  const showAlert = useShowAlert();

  return (
      ...

      <Button title={'Show alert'} onPress={async () => {
        const result = await showAlert({
          title: 'Title',
          text: 'text' // (or) <Text>Text component</Text>,
        });
        console.log(result);
      }}/>

      ...
  );
}
```

**Creating your custom alert**

You need to pass your custom alert to the `renderAlert` function. Make sure to use the props.

```javascript
import {AlertProvider} from 'react-native-async-alert';

const renderAlert = ({alertData, visible, hideCancel, text, title, onEvent, onPressCancel, onPressOk}) => {
  return (
    <SomeCustomAlert
      title={title}
      text={text}
      onClose={onPressCancel}
      onOk={onPressOk}
      isAlertVisible={!!visible}
      hideCancel={hideCancel}
      footerContent={alertData?.footerContent} // We can use alert data for any type of data.
    />
  );
};

function App() {
  return (
    <AlertProvider renderAlert={renderAlert}>
      <SafeAreaView>
        <RemainingContent />
      </SafeAreaView>
    </AlertProvider>
  );
}
```

Then show the alert simply like below

```javascript
import React from 'react';
import Button from 'react-native';
import {useShowAlert} from 'react-native-async-alert';

function ExampleScreen() {
  const showAlert = useShowAlert();

  return (
      ...

      <Button title={'Show alert'} onPress={async () => {
        const isClickedOk = await showAlert({
          title: "Title",
          text: "Text",
          alertData: {
            footerContent: <Text>Some Content</Text>
          }
        });
        console.log(isClickedOk);
      }}/>

      ...
  );
}
```

## Contributing

Contributions are always welcome!

See `CONTRIBUTING.md` for ways to get started.

Please adhere to this project's `code of conduct`.

## 🚀 About Me

Hi, this is Venkatesh Paithireddy👋. I'm a self-learned full-stack mobile📱 developer. I like coding Android mostly ❤️.
You can contact me at [venkypaithireddy@gmail.com](mailto://venkypathireddy@gmail.com)
