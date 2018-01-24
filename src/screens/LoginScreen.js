import React from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

import Settings from "../config/Settings";

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: "Welcome",
    header: null
  };

  state = {
    login: "arno@airbnb-api.com",
    password: "password01",
    logging: false
  };

  _login = () => {
    if (!this.state.logging) {
      this.setState({ logging: true });
      const { navigate } = this.props.navigation;
      fetch("https://airbnb-api.now.sh/api/user/log_in", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: this.state.login,
          password: this.state.password
        })
      })
        .then(response => response.json())
        .then(item => {
          //this.setState({ group: item });
          console.debug(item);
          if (item.token != undefined) {
            navigate("MainScreen");
          }
        })
        .catch(error => {
          console.error(error);
        })
        .finally(() => this.setState({ logging: false }));
    }
  };

  renderButton() {
    if (!this.state.logging) {
      return (
        <TouchableOpacity style={styles.button} onPress={this._login}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity style={styles.button} onPress={this._login}>
        <ActivityIndicator size="large" color={Settings.color.background} />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.icone} source={require("../img/home.png")} />
        <Text style={styles.title}> Welcome </Text>
        <TextInput
          style={[{ marginTop: 70 }, styles.input]}
          underlineColorAndroid="#ffffff"
          placeholder="email"
          placeholderTextColor="#ffffff"
          keyboardType="email-address"
          onChangeText={login => this.setState({ login })}
          value={this.state.login}
          onSubmitEditing={this._login}
        />
        <TextInput
          style={[{ marginTop: 30 }, styles.input]}
          underlineColorAndroid="#ffffff"
          placeholder="mot de passe"
          placeholderTextColor="#ffffff"
          secureTextEntry={true}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          onSubmitEditing={this._login}
        />
        {this.renderButton()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Settings.color.background
  },
  icone: {
    alignSelf: "center"
  },
  title: {
    marginTop: 20,
    color: "#ffffff",
    fontSize: 40,
    alignSelf: "center"
  },
  input: {
    height: 50,
    marginHorizontal: 20,
    color: "#ffffff",
    fontSize: 22
  },
  button: {
    backgroundColor: "#ffffff",
    marginTop: 50,
    paddingVertical: 12,
    paddingHorizontal: 30,
    width: 200,
    height: 60,
    borderRadius: 40,
    alignSelf: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: Settings.color.background,
    fontSize: 26,
    alignSelf: "center"
  }
});
