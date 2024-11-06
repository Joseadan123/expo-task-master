import { getAllUsersTeam } from "@/db/teams";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import SectionedMultiSelect, {
  IconProps,
} from "react-native-sectioned-multi-select";
import { MaterialIcons as Icon } from "@expo/vector-icons";

interface Member {
  id: string;
  name: string;
}

function RenderIcon(props: IconProps) {
  return <Icon name={props.name} size={props.size} />;
}

export default function CreateTask() {
  const [selectedMembers, setSelectedMembers] = useState<Member[]>([]);
  const [loadingMembers, setLoadingMembers] = useState(false);
  const [items, setItems] = useState<Member[]>([]);
  const { teamid } = useLocalSearchParams();

  useEffect(() => {
    if (!teamid) return;
    setLoadingMembers(true);
    getAllUsersTeam(teamid as string)
      .then((users) => {
        console.log(users);
        setItems(
          users.users?.map((user) => ({
            id: user.uid,
            name: user.displayName,
          })) as Member[]
        );
      })
      .finally(() => setLoadingMembers(false));
  }, []);

  return (
    <View>
      <Text>Crear tarea</Text>
      <TextInput placeholder="Nombre de la tarea" />
      <TextInput placeholder="Descripcion de la tarea" />
      <TextInput placeholder="Fecha de entrega" />
      <TextInput placeholder="Categoria" />
      <SectionedMultiSelect
        items={items}
        uniqueKey="id"
        selectedItems={selectedMembers}
        onSelectedItemsChange={setSelectedMembers}
        IconRenderer={Icon}
        loading={loadingMembers}
      />
    </View>
  );
}
