import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  ScrollView,
  View
} from "react-native";

import Settings from "../config/Settings";
import Room from "../components/Room";

export default class RoomScreen extends React.Component {
  state = {
    room: null
  };

  componentDidMount() {
    fetch(
      "https://airbnb-api.now.sh/api/room/" +
        this.props.navigation.state.params.roomId,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(item => {
        this.setState({ room: item });
        console.debug(item);
      })
      .catch(error => {
        console.error(error);
      });
  }

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
    const room = this.state.room;
    if (room != null) {
      return (
        <ScrollView style={styles.container}>
          <Room room={this.state.room} />
        </ScrollView>
      );
    } else {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            marginTop: 100
          }}
        >
          <ActivityIndicator size="large" color="#999999" />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1
  }
});
