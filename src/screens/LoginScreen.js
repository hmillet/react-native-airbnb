import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

import Settings from "../config/Settings";

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: "Welcome"
  };

  state = {};

  render() {
    return (
      <View style={styles.container}>
        <Text> Ecran de login </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
