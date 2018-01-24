import React from "react";
import { Dimensions, StyleSheet, Text, ScrollView } from "react-native";

import Settings from "../config/Settings";
import RoomList from "../components/RoomList";

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
        <RoomList navigation={this.props.navigation} />
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
