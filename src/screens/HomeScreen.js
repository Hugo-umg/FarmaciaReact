import { Text, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({ navigation }) {
  const { navigate } = navigation;

  const goToSettings = () => {
    navigate("Settings");
  };

  return (
    <SafeAreaView>
      <Text>Estas en Home Screen</Text>
      <Text>Estas en Home Screen</Text>
      <Text>Estas en Home Screen</Text>
      <Text>Estas en Home Screen</Text>
      <Text>Estas en Home Screen</Text>
      <Button title="Ir a Ajustes" onPress={goToSettings} />
    </SafeAreaView>
  );
}
