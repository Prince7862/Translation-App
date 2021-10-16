import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "../screens/Home";
import SptoEng from "../screens/SpanishtoEnglish";
import EngtoSp from "../screens/EnglishtoSpanish";




const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
        barStyle={styles.backgroundTabStyle}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

          if(route.name === "English to Spanish") {
            iconName = focused ? "arrow-back" : "arrow-back-sharp";
          }
          else if(route.name == "Spanish to English"){
            iconName = focused ? "arrow-forward" : "arrow-forward-sharp";
          }
                    return <Ionicons name={iconName} size={size} color={color} style={styles.icons} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'blue',
            }}
            
        >
       <Tab.Screen name ="English to Spanish" component={EngtoSp}/>
      <Tab.Screen name ="Spanish to English" component={SptoEng}/>
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
  backgroundTabStyle: {
    backgroundColor: "cyan",
    //border:100,
    //borderTopLeftRadius:100,
    //borderTopRightRadius:100,
  },
  icons: {
    width: RFValue(38),
    height: RFValue(38),
    color: "#000"
  },
})



export default BottomTabNavigator