import React from "react";
import {  Text } from "react-native";
import MaIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FaIcon from "react-native-vector-icons/FontAwesome5";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Login from "../Login";
import PhoneNumber from "../PhoneNumber";
import Otp from "../Otp";
import Signup from "../Signup";
import Home from "../Home";
import Orders from "../Orders";
import Profile from "../Profile";
import Wallet from "../Wallet";
import SplashScreen from "../SplashScreen";
import ProfileEdit from "../ProfileEdit";
import Notification from "../Notification";
import NewOrders from "../NewOrders";
import OnlineOrders from "../OnlineOrders";
import IncomeTransaction from "../IncomeTransaction";
import AddItem from "../AddItem";
import Items from "../Items";

export default function Routes() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const Loginstack = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="phonenumber" component={PhoneNumber} />
      <Stack.Screen name="otp" component={Otp} />
      <Stack.Screen name="signup" component={Signup} />
    </Stack.Navigator>
  );
  const Tabstack = () => (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 10,
                color: focused ? "#098D73" : "#ABDDD3",
              }}
            >
              Home
            </Text>
          ),
          title: "Home",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <FaIcon
                name="home"
                size={23}
                color={focused ? "#098D73" : "#ABDDD3"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="IncomeTransaction"
        component={IncomeTransaction}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 10,
                color: focused ? "#098D73" : "#ABDDD3",
              }}
            >
              Income
            </Text>
          ),
          title: "Income",
          tabBarIcon: ({ focused }) => {
            return (
              <MaIcon
                name="cash"
                size={25}
                color={focused ? "#098D73" : "#ABDDD3"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 10,
                color: focused ? "#098D73" : "#ABDDD3",
              }}
            >
              Wallet
            </Text>
          ),
          title: "Wallet",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <MaIcon
                name="wallet"
                size={25}
                color={focused ? "#098D73" : "#ABDDD3"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 10,
                color: focused ? "#098D73" : "#ABDDD3",
              }}
            >
              Profile
            </Text>
          ),
          title: "Profile",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <FaIcon
                name="user-alt"
                size={23}
                color={focused ? "#098D73" : "#ABDDD3"}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
  const Mainstack = () => (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="home"
        component={Tabstack}
      />
      <Stack.Screen name="editprofile" component={ProfileEdit} />
      <Stack.Screen name="Notifications" component={Notification} />
      <Stack.Screen name="franchiseneworders" component={NewOrders} />
      <Stack.Screen name="franchiseonlineorders" component={OnlineOrders}/>
      <Stack.Screen name="Add Item" component={AddItem}/>
      <Stack.Screen name="Items" component={Items}/>
    </Stack.Navigator>
  );
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="mainsplashscreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="mainsplashscreen" component={SplashScreen} />
        <Stack.Screen name="mainloginscreen" component={Loginstack} />
        <Stack.Screen name="maintabscreen" component={Mainstack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
