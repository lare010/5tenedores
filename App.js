import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import UserNavigation from "./app/navigations/User";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <UserNavigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
