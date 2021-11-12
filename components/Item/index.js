import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Item = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: "white",
        alignItems: "center",
        marginTop:5
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View>
          <Image
            style={{ height: 50, width: 50, marginRight: 5 }}
            source={require("../../assets/thali.jpeg")}
          />
        </View>
        <View>
          <Text>Lunch Box One</Text>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Text>199.00</Text>
            <Text style={{ marginLeft: 10 }}>99.0</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          height: 30,
          backgroundColor: "#098D73",
          borderRadius: 4,
          justifyContent: "center",
          alignItems: "center",
          padding: 6,
        }}
      >
        <Text style={{ color: "#fff" }}>Add to Sale</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 20,

  },
});

export default Item;
