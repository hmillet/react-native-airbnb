import React from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import Settings from "../config/Settings";
import ListItem from "./Room";

export default class RoomList extends React.Component {
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

  _onPressItem = id => {
    const { navigate } = this.props.navigation;
    navigate("RoomScreen", { roomId: id });
  };

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
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => this._onPressItem(item._id)}>
            <ListItem room={item} inList={true} />
          </TouchableOpacity>
        )}
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
