import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import Settings from "../config/Settings";

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: "Welcome"
  };

  state = {};

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text> Ecran de login </Text>
        <Button title="Page d'accueil" onPress={() => navigate("MainScreen")} />
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
