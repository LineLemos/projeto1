import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import Door from "./src/screens/Door";
import Details from "./src/screens/Details";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Bem-vinde",
            headerStyle: {
              backgroundColor: "pink",
            },
            headerTintColor: "indianred",
          }}
        />

        <Stack.Screen
          name="Door"
          component={Door}
          options={{
            title: "Escolha uma porta",
            headerStyle: {
              backgroundColor: "pink",
            },
            headerTintColor: "indianred",
          }}
        />

        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: "Prêmio",
            headerStyle: {
              backgroundColor: "pink",
            },
            headerTintColor: "indianred",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
