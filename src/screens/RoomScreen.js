import React from "react";
import { Dimensions, StyleSheet, Text, ScrollView } from "react-native";

import Settings from "../config/Settings";
import Room from "../components/Room";

export default class RoomScreen extends React.Component {
  state = {};

  static navigationOptions = {
    title: "Room",
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
        <Room roomId={this.props.navigation.state.params.roomId} />
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
