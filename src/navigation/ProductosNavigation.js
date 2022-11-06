import React, { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProductosScreen from "../screens/Productos";
import ProductoScreen from "../screens/Producto";

const Stack = createNativeStackNavigator();

export default class ProductosNavigation extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Productos Screen"
          component={ProductosScreen}
          options={{ title: "Productos" }}
        />
        <Stack.Screen name="Producto Screen" component={ProductoScreen} />
      </Stack.Navigator>
    );
  }
}
