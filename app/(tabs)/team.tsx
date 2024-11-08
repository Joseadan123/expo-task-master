import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useFontSize from "@/hooks/useFontSize";
import useTeam from "@/hooks/useTeam";
import PageWithOutTeam from "@/components/PageWithOutTeam";
import AvatarGroup from "@/components/AvatarGroup";
import {
  RefreshControl,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { useState } from "react";
import { router } from "expo-router";

export default function TeamScreen() {
  const { team, loading, getTeamInfo } = useTeam();
  const [refreshing, setRefreshing] = useState(false);
  if (loading && !team) return <Text>Loading...</Text>;
  if (!team) return <PageWithOutTeam />;
  return (
    <SafeAreaView>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={async () => {
              setRefreshing(true);
              await getTeamInfo();
              setRefreshing(false);
            }}
          />
        }
        className="h-full"
      >
        <View className="bg-black px-8 py-6 rounded-b-lg">
          <Text
            className="text-white font-juraSemiBold"
            style={{ fontSize: useFontSize(32) }}
          >
            {team.title}
          </Text>
          <Text className="text-white font-juraMedium">
            Creado por {team.createdBy.displayName}
          </Text>
          <View className="flex-row gap-3 mt-3 items-center">
            <Text className="text-white font-juraMedium">
              {team.partners.length} miembros
            </Text>
            <AvatarGroup participants={team.partners} />
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "/(task)/(create)/[teamid]",
              params: {
                teamid: team.code,
              },
            })
          }
        >
          <View className="p-4 items-center bg-lime-300 m-4 rounded-lg">
            <Text
              className="font-juraBold"
              style={{
                fontSize: useFontSize(16),
              }}
            >
              Crear tarea
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
