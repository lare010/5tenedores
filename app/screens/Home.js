import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class Home extends Component {
  render() {
    return (
      <View>
        <Text>Home Screen...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewbody: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  }
});
