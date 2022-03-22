import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardScreen from "../screens/tabs/Dashboard";
import WorkoutScreen from "../screens/tabs/workout/Workout";
import DietScreen from "../screens/tabs/diet/Diet";
import SettingsScreen from "../screens/tabs/Settings";
import WorkoutNav from "./WorkoutNav";
import DietNav from "./DietNav";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";

const homeName = "Dashboard";
const workoutName = "Workout";
const dietName = "Diet";
const settingsName = "Settings";

export default function MainTabNav() {
  //   return (
  //     <TabNav.Navigator
  //       screenOptions={{
  //         headerShown: false,
  //       }}
  //     >

  //     </TabNav.Navigator>
  //   );
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === workoutName) {
              iconName = focused ? "list" : "list-outline";
            } else if (rn === dietName) {
              iconName = focused ? "settings" : "person-outline";
            } else if (rn === settingsName) {
              iconName = focused ? "person" : "settings-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "black",
          inactiveTintColor: "grey",
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70 },
        }}
      >
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Workout" component={WorkoutNav} />
        <Tab.Screen name="Diet" component={DietNav} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
