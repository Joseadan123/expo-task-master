import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useFontSize from "@/hooks/useFontSize";
import useTeam from "@/hooks/useTeam";
import PageWithOutTeam from "@/components/PageWithOutTeam";

export default function TeamScreen() {
  const { team, loading } = useTeam();
  if (loading && !team) return <Text>Loading...</Text>;
  if (!team) return <PageWithOutTeam />;
  return (
    <SafeAreaView>
      <View className="bg-black px-8 py-4 rounded-b-lg">
        <Text
          className="text-white font-juraSemiBold"
          style={{ fontSize: useFontSize(32) }}
        >
          {team.title}
        </Text>
        <Text className="text-white font-juraMedium">
          {team.createdBy.displayName}
        </Text>
      </View>
    </SafeAreaView>
  );
}
