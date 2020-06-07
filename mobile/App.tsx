import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar, View } from 'react-native';

import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';

import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular, 
    Roboto_500Medium, 
    Ubuntu_700Bold
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar  barStyle="dark-content" backgroundColor="transparent" translucent/>
      <Routes />
    </>
  );
}








/* No ReactNative todos os elemntos tem display flex
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // No CSS se escreve assim: background-color: '#7159c1',
    backgroundColor: '#7159c1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
  },
});
*/