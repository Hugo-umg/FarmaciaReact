import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ProductosNavigation from "./ProductosNavigation";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Productos"
        component={ProductosNavigation}
        options={{
          tabBarLabel: "Productos",
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
