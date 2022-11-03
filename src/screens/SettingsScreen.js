import { Text, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen({ navigation }) {
  const { navigate } = navigation;

  const goToHome = () => {
    navigate("Home");
  };

  return (
    <SafeAreaView>
      <Text>Estas en Settings Screen</Text>
      <Text>Estas en Settings Screen</Text>
      <Text>Estas en Settings Screen</Text>
      <Text>Estas en Settings Screen</Text>
      <Text>Estas en Settings Screen</Text>
      <Text>Estas en Settings Screen</Text>
      <Text>Estas en Settings Screen</Text>
      <Button title="Ir a Inicio" onPress={() => goToHome} />
    </SafeAreaView>
  );
}
