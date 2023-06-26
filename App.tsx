import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import MapScreen from "./src/screens/MapScreen";
import ListScreen from "./src/screens/ListScreen";
import { RootStackParamList } from "./src/types";
import VehicleScreen from "./src/screens/VehicleScreen";
import { StatusBar } from "expo-status-bar";
const Stack = createStackNavigator<RootStackParamList>();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#fff",
  },
};

export default function App() {
  return (
    <>
      <StatusBar hidden />
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator initialRouteName="ListScreen">
          <Stack.Screen
            name="ListScreen"
            component={ListScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MapScreen"
            component={MapScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="VehicleScreen"
            component={VehicleScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
