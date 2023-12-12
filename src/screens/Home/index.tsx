
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "tamagui";


const HomeScreen = () => {
  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1 }} edges={["bottom", "left", "right"]}>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;
