import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import ChangeAvatar from "@/components/ChangeAvatar";
import useUser from "@/hooks/useUser";
import { signOut } from "firebase/auth";
import { auth } from "@/db/firebase";

export default function TabTwoScreen() {
  const { user, logout } = useUser();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajustes</Text>
      {/* Aquí podrías agregar otros componentes */}
      <View style={styles.iconContainer}>
        <Ionicons
          name="settings-outline"
          size={64}
          color="gray"
          style={styles.icon}
        />
      </View>
      <View>
        <TouchableOpacity>
          <View style={styles.circleContainer}>
            <ChangeAvatar image={user?.photoURL as string} />
            <Text style={styles.nameUser}>Rogelio</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          signOut(auth);
          logout();
        }}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    padding: 16,
    marginTop: 30,
  },
  icon: {
    marginBottom: 20,
  },
  iconContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
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
  circleContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    position: "relative",
    gap: 16,
  },
  circle: {
    width: 70, // Ancho del círculo
    height: 70, // Alto del círculo
    borderRadius: 50, // Radio del borde para hacer el círculo
    backgroundColor: "blue", // Color del círculo
  },
  imageUser: {
    width: 70, // Ancho del círculo
    height: 70, // Alto del círculo
    borderRadius: 50, // Radio del borde para hacer el círculo
  },
  nameUser: {
    fontSize: 23,
    fontWeight: "bold",
  },
  iconCircle: {},
});
