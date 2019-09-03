import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class TopFive extends Component {
  render() {
    return (
      <View>
        <Text>Top Five Screen...</Text>
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
