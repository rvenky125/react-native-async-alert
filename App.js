import React from 'react';
import {Button, StyleSheet} from 'react-native';
import AlertProvider, {useShowAlert} from './AlertProvider';

function App() {
  const showAlert = useShowAlert();
  return (
    <Button
      title="Show Alet"
      onPress={async () => {
        await showAlert({
          alertData: 'Hellow world',
          onEvent: e => {
            console.log(e);
          },
        });
        await showAlert({
          alertData: 'This is venky',
          onEvent: e => {
            console.log(e);
          },
        });
      }}
    />
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
