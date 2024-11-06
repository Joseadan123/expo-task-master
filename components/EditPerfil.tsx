import { View, StyleSheet } from "react-native";
import ChangeAvatar from "@/components/ChangeAvatar";

export default function EditPerfil() {
  <View>
    <ChangeAvatar image={user?.photoUrl as string} />
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
