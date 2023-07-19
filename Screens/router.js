import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();

import { RegistrationScreen } from "./RegistrationScreen";
import { LoginScreen } from "./LoginScreen";
import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";
import CreatePostsScreen from "./CreatePostsScreen";

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Register"
          component={RegistrationScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <Tab.Navigator
      screenOptions={{tabBarShowLabel: false,}}
    >
      <Tab.Screen options={{tabBarIcon: (focused, color, size) => (<AntDesign name="appstore-o" size={24} color="black" />), headerRight: (focused, color, size) => (
            <MaterialIcons
              name="logout"
              size={24}
              color="#BDBDBD"
              style={{ marginRight: 10 }}
            />
          ),}} name="Posts" component={PostsScreen} />
      <Tab.Screen options={{
          tabBarIcon: (focused, color, size) => (
            <Ionicons name="add-circle" size={40} color="#FF6C00" />
          ),
        }} name="Create" component={CreatePostsScreen} />
      <Tab.Screen options={{
          tabBarIcon: (focused, color, size) => (
            <Feather name="user" size={24} color="#212121" />
          ),
        }} name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
