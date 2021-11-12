import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import { RadioButton } from "react-native-paper";
export default function Wallet({ navigation }) {
  const [checked, setChecked] = React.useState("first");
  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 25,
            flexDirection: "row",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {" "}
            Wallet Balance:{" "}
          </Text>
          <Text style={{ fontSize: 18, color: "green", fontWeight: "bold" }}>
            1000
          </Text>
        </View>
        <View
          style={{
            marginTop: 40,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <RadioButton
              color={"#347937"}
              value="first"
              status={checked === "first" ? "checked" : "unchecked"}
              onPress={() => setChecked("first")}
            />
            <Text> Add Funds</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <RadioButton
              color={"#347937"}
              value="first"
              status={checked === "second" ? "checked" : "unchecked"}
              onPress={() => setChecked("second")}
            />
            <Text> Withdraw Funds</Text>
          </View>
        </View>
        <View style={{ marginTop: 70, alignItems: "center" }}>
          <TextInput
            placeholder="Amount"
            placeholderTextColor="#555"
            style={{
              width: "80%",
              backgroundColor: "#CCC",
              height: 50,
              color: "#000",
              borderRadius: 25,
              paddingHorizontal: 10,
              textAlign: "center",
            }}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <View
            style={{
              height: 70,
              width: 100,
              backgroundColor: "#DDD",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 18, color: "#555" }}>
              Rs. 100
            </Text>
          </View>
          <View
            style={{
              height: 70,
              width: 100,
              backgroundColor: "#DDD",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 18, color: "#555" }}>
              Rs. 1000
            </Text>
          </View>
          <View
            style={{
              height: 70,
              width: 100,
              backgroundColor: "#DDD",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 18, color: "#555" }}>
              Rs. 2000
            </Text>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              marginTop: 60,
              justifyContent: "center",
              alignItems: "center",
              height: 50,
              width: "90%",
              backgroundColor: "#1AB394",
              borderRadius: 25,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>Add Funds</Text>
          </View>
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginHorizontal: 10,
    backgroundColor: "#fff",
  },
});
