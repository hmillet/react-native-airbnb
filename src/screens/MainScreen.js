import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

import Settings from "../config/Settings";

export default class MainScreen extends React.Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <Text> Ecran d'accueil </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green"
  }
});
