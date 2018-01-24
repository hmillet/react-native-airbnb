import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import Settings from "../config/Settings";

export default class Room extends React.Component {
  state = {};
  renderPhoto(room) {
    if (room.photos.length > 0) {
      return (
        <Image
          style={{ height: 180, width: "100%" }}
          resizeMode="cover"
          source={{
            uri: room.photos[0]
          }}
        />
      );
    }
  }

  render() {
    const room = this.props.room;
    return (
      <View style={styles.container}>
        <View style={styles.photo}>{this.renderPhoto(room)}</View>
        <View style={styles.content}>
          <View style={styles.description}>
            <Text style={styles.title} numberOfLines={1}>
              {room.title}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    margin: 20,
    paddingBottom: 10,
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  photo: {
    height: 190
  },
  content: {
    flex: 1,
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  description: {
    flexDirection: "column",
    justifyContent: "flex-start",
    flex: 1
  },
  title: {
    color: "#000000",
    fontSize: 20
  }
});
