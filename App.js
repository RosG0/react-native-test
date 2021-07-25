import React, { useState } from "react";
import * as Fonts from "expo-font";
import AppLoading from 'expo-app-loading';
import MainStack from './navigation';

const fonts = () => Fonts.loadAsync({
    "mt-italic": require("./assets/fonts/Montserrat-Italic.ttf"),
    "mt-light": require("./assets/fonts/Montserrat-Light.ttf"),
});

export default function App() {
  const [font, setFont] = useState(false);

  if (font) {
    return (
    <MainStack/>
    );
  }
  return <AppLoading
   startAsync={fonts}
   onFinish={() => setFont(true)}
   onError={console.warn}/>;
}