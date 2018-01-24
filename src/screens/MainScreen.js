import React from "react";
import { Dimensions, StyleSheet, Text, ScrollView } from "react-native";

import Settings from "../config/Settings";
import Body from "../components/Body";

export default class MainScreen extends React.Component {
  state = {};

  static navigationOptions = {
    title: "MonAirbnb",
    headerStyle: {
      backgroundColor: Settings.color.background
    },
    headerTitleStyle: {
      color: "#ffffff"
    },
    headerBackTitleStyle: {
      color: "#ffffff"
    },
    headerTintColor: "#ffffff"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Body />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1
  }
});
