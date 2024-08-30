import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RegisterUserScreen() {
  return (
    <SafeAreaView>
      <View>
        <View className="bg-gray-300 h-20 aspect-square rounded-full"></View>
      </View>
      <TouchableOpacity>
        <Link className="text-black" href="/(tabs)/">
          <Text className="text-black">Ir a inicio</Text>
        </Link>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
