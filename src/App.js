import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { StackNavigator } from "react-navigation";

import Settings from "./config/Settings";

import LoginScreen from "./screens/LoginScreen";
import MainScreen from "./screens/MainScreen";

const App = StackNavigator({
  LoginScreen: { screen: LoginScreen },
  MainScreen: { screen: MainScreen }
});

export default App;
