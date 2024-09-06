// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from "@expo/vector-icons/Ionicons";
import { type IconProps } from "@expo/vector-icons/build/createIconSet";
import { type ComponentProps } from "react";
import { Text, View } from "react-native";

type TabBarIconProps = IconProps<ComponentProps<typeof Ionicons>["name"]> & {
  title: string;
};

export function TabBarIcon({ title, style, ...rest }: TabBarIconProps) {
  return (
    <View className="items-center">
      <Ionicons size={28} {...rest} className="text-black" />
      <Text className="text-sm font-juraMedium">{title}</Text>
    </View>
  );
}
