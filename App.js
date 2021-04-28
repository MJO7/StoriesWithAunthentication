import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Icon } from "react-native-elements";
import "react-native-vector-icons";
import WriteStoryScreen from "./screens/WriteStoryScreen";
import ReadStoryScreen from "./screens/ReadStoryScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
const switchN = createBottomTabNavigator(
  {
    WelcomeScreen: { screen: WelcomeScreen },
    WriteStory: { screen: WriteStoryScreen },
    ReadStory: { screen: ReadStoryScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const routeName = navigation.state.routeName;
        if (routeName == "ReadStory") {
          return (
            <Icon
              name="history-edu"
              type="MaterialIcons"
              color={tintColor}
              size={40}
            />
          );
        } else if (routeName == "WriteStory") {
          return <Icon name="home" type="Entypo" color={tintColor} size={40} />;
        } else if (routeName == "WelcomeScreen") {
          return (
            <Icon name="login" type="AntDesign" color={tintColor} size={40} />
          );
        }
      },
      tabBarOptions: {
        activeTintColor: "black",
        inactiveTintColor: "grey",
      },
    }),
  }
);

const AppContainer = createAppContainer(switchN);
