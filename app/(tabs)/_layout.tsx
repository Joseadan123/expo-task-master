import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { StyleSheet } from "react-native";

const TabStyles = StyleSheet.create({
  tab: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    margin: 0,
    height: 64,
  },
});

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: TabStyles.tab,
        tabBarLabelStyle: {
          color: "black",
        },
        tabBarItemStyle: {
          alignItems: "center",
          justifyContent: "center",
        },
        tabBarLabelPosition: "below-icon",
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon title="Home" name={focused ? "home" : "home-outline"} />
          ),
        }}
      />
      <Tabs.Screen
        name="team"
        options={{
          title: "Equipo",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              title="Equipo"
              name={focused ? "people" : "people-outline"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              title="Buscar"
              name={focused ? "search" : "search-outline"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="config"
        options={{
          title: "config",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              title="Configuracion"
              name={focused ? "settings" : "settings-outline"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
