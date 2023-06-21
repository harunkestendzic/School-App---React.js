import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
/*
import Home from "./src/screens/Home";
import Citati from "./src/screens/Citati";
import Ucenici from "./src/screens/Ucenici";
import Zanimanja from "./src/screens/Zanimanja";
*/
import MainStackNavigator from "./src/navigation/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    /*
    <View>
    <Home />
    </View>
    */

    /*
     */
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}
