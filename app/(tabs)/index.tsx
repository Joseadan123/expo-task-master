import ChangeAvatar from "@/components/ChangeAvatar";
import useUser from "@/hooks/useUser";
import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
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
            <Text className="text-2xl font-bold">{user?.displayName}</Text>
            <Text className="text-xs font-bold text-gray-500">
              {user?.email}
            </Text>
          </View>
        </View>
        <View className="flex flex-row px-8 justify-between gap-4">
          <TouchableOpacity className="bg-black px-7 py-3 rounded-full shadow shadow-black/30">
            <Text className="text-white">Hoy</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white px-7 py-3 rounded-full shadow shadow-black/30 flex-1 items-center">
            <Text>Calendario</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center bg-lime-400 rounded-full w-12 text-white">
            <Ionicons name="apps" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
