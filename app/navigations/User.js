import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottonTabNavigator } from "react-navigation-stack";

//screens
import HomeScreen from "../screens/Home";
import TopFiveScreen from "../screens/TopFive";
import SearchScreen from "../screens/Search";
import MyAccountScreen from "../screens/MyAccount";

//stack de navegacion
const HomeScreenStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    defaultNavigationOptions: ({ navigation }) => ({
      title: "Home"
    })
  }
});

const TopFiveScreenStack = createStackNavigator({
  TopFive: {
    screen: TopFiveScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Top 5 Restaurantes"
    })
  }
});

const SearchScreenStack = createStackNavigator({
  Search: {
    screen: SearchScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Buscar"
    })
  }
});

const MyAccountScreenStack = createStackNavigator({
  MyAccount: {
    screen: MyAccountScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Mi Cuenta"
    })
  }
});

//rutas
const RootStack = createBottonTabNavigator({
  Home: {
    screen: HomeScreenStack
  }
});

export default createAppContainer(RootStack);
