import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

import Settings from "../config/Settings";

export default class Room extends React.Component {
  state = {};

  static defaultProps = {
    room: null,
    inList: false
  };

  static propTypes = {
    room: PropTypes.object.isRequired,
    inList: PropTypes.bool
  };

  renderPhoto(room) {
    const inList = this.props.inList;
    if (room.photos.length > 0) {
      return (
        <Image
          style={[
            { width: "100%" },
            inList ? { height: 180 } : { height: 240 }
          ]}
          resizeMode="cover"
          source={{
            uri: room.photos[0]
          }}
        />
      );
      return <View />;
    }
  }

  renderPrice(room) {
    if (room.price) {
      return (
        <View
          style={{
            position: "absolute",
            left: 0,
            bottom: 15
          }}
        >
          <Text
            style={{
              backgroundColor: "#000000",
              color: "#ffffff",
              fontSize: 28,
              paddingHorizontal: 14,
              paddingVertical: 14
            }}
          >
            {room.price + " €"}
          </Text>
        </View>
      );
      return <View />;
    }
  }
  renderUser(room) {
    if (
      room.user &&
      room.user.account &&
      room.user.account.photos &&
      room.user.account.photos.length > 0
    ) {
      return (
        <Image
          style={{ height: 60, width: 60, borderRadius: 30, marginLeft: 10 }}
          resizeMode="cover"
          source={{
            uri: room.user.account.photos[0]
          }}
        />
      );
      return <View />;
    }
  }

  renderRating(room) {
    const ratingValue = room.ratingValue || 0;
    const nbReviews =
      room.reviews > 0 ? "" + room.reviews + " reviews" : "no reviews";

    let stars = [];
    for (let i = 0; i < ratingValue; i++) {
      stars.push(
        <Image
          key={room._id + "-" + i}
          source={require("../img/star-full.png")}
        />
      );
    }
    for (let i = ratingValue; i < 5; i++) {
      stars.push(
        <Image
          key={room._id + "-" + i}
          source={require("../img/star-empty.png")}
        />
      );
    }
    return (
      <View style={styles.reviews}>
        {stars}
        <Text style={styles.textReview}>{nbReviews}</Text>
      </View>
    );
  }

  renderDetail(room) {
    const inList = this.props.inList;
    if (room && !inList) {
      return (
        <View style={styles.detail}>
          <Text style={styles.detailDescription} numberOfLines={3}>
            {room.description}
          </Text>
        </View>
      );
      return <View />;
    }
  }

  render() {
    const room = this.props.room;
    const inList = this.props.inList;
    return (
      <View
        style={[
          styles.container,
          inList
            ? {
                marginTop: 20,
                borderBottomColor: "#bbb",
                borderBottomWidth: StyleSheet.hairlineWidth
              }
            : {}
        ]}
      >
        <View
          style={
            inList ? { marginHorizontal: 20, height: 190 } : { height: 250 }
          }
        >
          {this.renderPhoto(room)}
          {this.renderPrice(room)}
        </View>
        <View style={styles.content}>
          {this.renderUser(room)}
          <View style={styles.description}>
            <Text style={styles.title} numberOfLines={1}>
              {room.title}
            </Text>
            {this.renderRating(room)}
          </View>
        </View>
        {this.renderDetail(room)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingBottom: 10
  },
  content: {
    marginHorizontal: 20,
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
  },
  reviews: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  textReview: {
    color: "#666666",
    fontSize: 15,
    marginLeft: 10,
    paddingTop: 3
  },
  detail: {
    margin: 20
  },
  detailDescription: {
    color: "#000000",
    fontSize: 18
  }
});
