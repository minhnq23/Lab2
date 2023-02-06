import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  View,
  Image,
  Modal,
  Pressable,
} from "react-native";
import { Component, useState } from "react";
import Manager from "./Manager";
import About from "./About";

const Stack = createNativeStackNavigator();

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const Home = (props) => {
  const nav = props.navigation;
  return (
    <View>
      <Text>Home</Text>
      <Image
        style={styles.logo}
        source={{
          uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
        }}
      />
      <Button
        title="Sang Manager"
        onPress={() => nav.navigate("Manager", { name: "Người dùng" })}
      />
      <Button
        title="Sang About"
        onPress={() => nav.navigate("About", { name: "Người dùng" })}
      />
    </View>
  );
};

const list = [
  {
    name: "bun bo",
    price: 3000,
  },
  {
    name: "Pho",
    price: 3000,
  },
  {
    name: "com",
    price: 3000,
  },
  {
    name: "mien",
    price: 3000,
  },
  {
    name: "luon",
    price: 3000,
  },
];

const student = {
  name: " Nguyen Quang Minh",
  class: "CP17301",
  id: "Ph25450",
};
export default class App extends Component {
  render() {
    const numbers = [1, 2, 3];
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="Manager"
            component={Manager}
            initialParams={{ list }}
          />
          <Stack.Screen
            name="About"
            component={About}
            initialParams={{ student }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  img: {
    height: 400,
    width: 400,
  },
  logo: {
    width: 66,
    height: 58,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  styleButton: {
    padding: 10,
    margin: 10,
  },

  text: {
    fontStyle: "italic",
    color: "red",
  },
  appButtonContainer: {
    elevation: 8,
    margin: 10,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
