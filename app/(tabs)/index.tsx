import ChangeAvatar from "@/components/ChangeAvatar";
import useFontSize from "@/hooks/useFontSize";
import useUser from "@/hooks/useUser";
import { fonts } from "@/styles/font";
import { Ionicons } from "@expo/vector-icons";
import { Image, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { user } = useUser();
  return (
    <SafeAreaView>
      <View className="flex bg-[#E7E7E7] h-full">
        <View className="p-8 flex-row gap-4 items-center">
          <Image
            source={{ uri: user?.photoURL as string }}
            width={60}
            height={60}
            className="rounded-full"
          />
          <View className="flex-1">
            <Text className="font-juraBold">{user?.displayName}</Text>
            <Text className="text-base text-black font-juraRegular">
              {user?.email}
            </Text>
          </View>
          <TouchableOpacity className="bg-white w-14 aspect-square items-center justify-center rounded-full">
            <Ionicons
              name="notifications"
              size={24}
              color="black"
              style={styles.iconNotification}
            />
          </TouchableOpacity>
        </View>
        <View className="flex flex-row px-8 justify-between gap-4">
          <TouchableOpacity className="bg-black px-7 py-3 rounded-full shadow-xl shadow-black">
            <Text className="text-white font-juraRegular text-sm">Hoy</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white px-7 py-3 rounded-full shadow-xl shadow-black/30 flex-1 items-center">
            <Text className="font-juraRegular text-sm">Calendario</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center bg-lime-400 rounded-full w-12 text-white shadow-xl shadow-black">
            <Ionicons name="apps" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <Text className="px-7 pt-8 mb-14" style={fonts.title}>
          Revisa lo que tienes que hacer hoy
        </Text>
        <View className="bg-black mx-7 p-4 border-white border rounded-[23px] ">
          <Text style={fonts.titleCard} className="text-white">
            Reunion con clientes
          </Text>
          <Text className="text-white mt-8 " style={fonts.descriptionCard}>
            Afinar detalles sobre lo que se tiene que lograr
          </Text>
          <View className="flex-row h-fit mt-5 items-center gap-4">
            <TouchableOpacity className="bg-lime-300 w-fit rounded-full px-4 py-2">
              <Text className="text-black" style={fonts.buttonCard}>
                Ventas
              </Text>
            </TouchableOpacity>
            <Text
              className="text-white font-juraMedium"
              style={{ fontSize: useFontSize(12) }}
            >
              Miercoles 28 Julio
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  iconNotification: {
    marginRight: 0,
  },
});
