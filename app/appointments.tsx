import { Text, View } from "react-native";

export default function Appointments() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 18, fontWeight: "600" }}>Appointments Screen</Text>
      <Text style={{ marginTop: 8, color: "#4b5563" }}>List of scheduled appointments will go here.</Text>
    </View>
  );
}