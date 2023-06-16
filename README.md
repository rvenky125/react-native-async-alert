
# react-native-async-alert

This library provide you way to use your custom alert asynchronously.




![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)



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

      <Button title={'Show alert'} onPress={() => {
        showAlert({
          title: 'Title',
          text: 'text',
        });
      }}/>

      ...
  );
}
```

**Creating you custom alert**

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

      <Button title={'Show alert'} onPress={() => {
        showAlert({
          alertData: {
            text: "Text",
            message: "Message",
            // Give any data you want which will send to the alert
          },
          onEvent: (event) => {
            console.log(event)
          }
        });
      }}/>

      ...
  );
}
```
## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## 🚀 About Me
This is Venkatesh Paithireddy. I'm a self learned a full stack mobile developer 📱. I like mostly coding Android ❤️.
