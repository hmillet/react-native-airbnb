import React from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View
} from "react-native";

import Settings from "../config/Settings";
import ListItem from "./Room";

export default class Body extends React.Component {
  state = {
    items: [],
    loading: true
  };
  componentDidMount() {
    fetch("https://airbnb-api.now.sh/api/room?city=paris", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(item => {
        this.setState({ items: item.rooms });
        console.debug(item);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => this.setState({ loading: false }));
  }
  render() {
    if (this.state.loading) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100
          }}
        >
          <ActivityIndicator size="large" color="#999999" />
        </View>
      );
    }
    return (
      <FlatList
        data={this.state.items}
        renderItem={({ item }) => <ListItem room={item} />}
        keyExtractor={(item, index) => item._id}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
