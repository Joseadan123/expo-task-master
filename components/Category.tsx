import useFontSize from "@/hooks/useFontSize";
import { fonts } from "@/styles/font";
import { Text, TouchableOpacity, View } from "react-native";

export default function CategoryTag({ color = "white" }: { color?: string }) {
  return (
    <View className="flex-row h-fit mt-5 items-center gap-4">
      <TouchableOpacity className="bg-lime-300 w-fit rounded-full px-4 py-2">
        <Text className="text-black" style={fonts.buttonCard}>
          Ventas
        </Text>
      </TouchableOpacity>
      <Text
        className="text-white font-juraMedium"
        style={{ fontSize: useFontSize(12), color }}
      >
        Miercoles 28 Julio
      </Text>
    </View>
  );
}
