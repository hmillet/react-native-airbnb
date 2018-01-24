import React from "react";
import { Dimensions, StyleSheet, Text, ScrollView } from "react-native";

import Settings from "../config/Settings";
//import Body from "../components/Body";

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
        <Text>{this.props.navigation.state.params.roomId}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00ffff",
    flex: 1
  }
});
