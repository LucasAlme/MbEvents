import React from "react";
import { StatusBar } from "react-native";
import Routes from './src/routes/main.routes';
import { colors } from "./src/utils/Constants";

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.branco}/> 
      <Routes />
    </>
  )
}