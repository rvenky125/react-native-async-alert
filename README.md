# react-native-async-alert

The "AsyncAlert" library is a powerful tool that allows developers to display alerts or modals asynchronously in their React applications. With a simple and intuitive API, it provides a seamless way to handle user interactions and gather responses from alert dialogs.

The library includes the AlertProvider component, which serves as a context provider for managing the display of alerts. By wrapping your application with AlertProvider, you gain access to the useShowAlert hook, which provides a function for showing alerts.

The showAlert function, provided by the library, enables you to show alerts dynamically by passing in various options such as the title, text, and additional alert data. It returns a promise that resolves to a boolean value indicating the user's response to the alert.

![Logo](https://github.com/rvenky125/react-native-async-alert/assets/58197145/e59b34e4-acb3-43da-844b-efc4dbc8def7)

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

**Using default alert**

Wrap your with <AlertProvider> in top level files like `index.js` or `App.js`

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
          text: 'text',
        });
        console.log(result);
      }}/>

      ...
  );
}
```

**Creating your custom alert**

You need to pass your custom alert to the renderAlert function. Make sure to use the props.

```javascript
import {AlertProvider} from 'react-native-async-alert';

const renderAlert = ({alertData, visible, onEvent, onClose}) => {
  return (
    <Modal visible={visible} transparent>
      <View style={{backgroundColor: 'white'}}>
        <Text style={{color: 'black'}}>{alertData?.text}</Text>
        <Text style={{color: 'black'}}>{alertData?.message}</Text>

        <Button title="Ok" onPress={() => onEvent('On Ok')} />

        <Button
          title="close"
          onPress={() => {
            onClose();
          }}
        />
      </View>
    </Modal>
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
        const result = await showAlert({
          alertData: {
            text: "Text",
            message: "Message",
            // Give any data you want which will send to the alert
          },
          onEvent: (event) => {
            console.log(event);
          }
        });
        console.log(result);
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

Hi, this is Venkatesh Paithireddy👋. I'm a self learned full stack mobile📱 developer. I like coding Android mostly ❤️.
You can contact me at [venkypaithireddy@gmail.com](mailto://venkypathireddy@gmail.com)
