import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "./TabNavigator";
import Home from "../screens/Home";
import EngtoSp from "../screens/EnglishtoSpanish";
import SptoEng from "../screens/SpanishtoEnglish";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return(
    <Drawer.Navigator>
      <Drawer.Screen name = "Main" component={BottomTabNavigator}/>
      <Drawer.Screen name = "Home" component={Home}/>
    </Drawer.Navigator>
  )
};

export default DrawerNavigator;