import { StyleSheet, Image, Platform, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { fonts } from "@/styles/font";
import { TouchableOpacity } from "react-native-gesture-handler";
import useFontSize from "@/hooks/useFontSize";

export default function TabTwoScreen() {
  return (
    <SafeAreaView>
      <View className="items-center justify-center h-full gap-16 p-1">
        <Text
          className="font-juraSemiBold text-center uppercase"
          style={fonts.title}
        >
          ¿Aun no tienes un equipo?
        </Text>
        <View className="items-center gap-4">
          <TouchableOpacity>
            <View className="bg-lime-300 px-6 py-4 rounded-full">
              <Text
                className="font-juraBold"
                style={{ fontSize: useFontSize(16) }}
              >
                Crea uno
              </Text>
            </View>
          </TouchableOpacity>
          <Text className="font-juraMedium">O</Text>
          <TouchableOpacity>
            <View className="bg-black px-6 py-4 rounded-full">
              <Text
                className="text-white font-juraBold"
                style={{ fontSize: useFontSize(16) }}
              >
                Unete a uno
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
