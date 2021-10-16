import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import SptoEng from "./screens/SpanishtoEnglish";
import EngtoSp from "./screens/EnglishtoSpanish";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./components/TabNavigator";
import DrawerNavigator from "./components/DrawerNavigator"

export default function App(){

    return(
     
         <NavigationContainer>
          <DrawerNavigator/>
         </NavigationContainer>
   
    )

}
