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
          <TouchableOpacity>
            <Ionicons name="notifications" size={50} color="gray" style={styles.iconNotification} />
          </TouchableOpacity>
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

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#E7E7E7",
  },
  container: {
    flex: 1,
    backgroundColor: "#E7E7E7",
  },
  header: {
    flexDirection: "row",
    padding: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  avatar: {
    width: 64,
    height: 64,
    backgroundColor: "gray",
    borderRadius: 32,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  userRole: {
    fontSize: 14,
    color: "#666",
  },
  iconNotification: {
    marginRight: 0,
  },
  iconCalendarContainer: {
    alignItems: "center",    
  },
  iconCalendar: {
    marginTop: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: 350,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 16,
    alignItems: "center",
  },
  calendar: {
    width: 320,
    height: 350,
  },
  closeButton: {
    marginTop: 16,
    backgroundColor: "#007BFF",
    borderRadius: 5,
    padding: 10,
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
  },
});
