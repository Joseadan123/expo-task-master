import useUser from "@/hooks/useUser";
import { Image, StyleSheet, Platform, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { user } = useUser();
  return (
    <SafeAreaView>
      <View className="flex bg-[#E7E7E7] h-full">
        <View className="p-8 flex-row gap-4">
          <Image
            source={{ uri: user?.photoURL as string }}
            width={60}
            height={60}
            className="rounded-full"
          />
          <View>
            <Text className="text-2xl font-bold">Rogelio</Text>
            <Text className="text-sm">Sistemas</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
