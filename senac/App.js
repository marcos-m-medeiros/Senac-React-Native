import { StyleSheet, Text, View } from "react-native";
import Form from "./components/Form";
import UserList from "./components/UserList";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>React Native</Text>
      <Form />
      <UserList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
