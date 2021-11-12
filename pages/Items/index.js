import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Item from "../../components/Item";

const Items = ({ navigation }) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View
        style={{
          paddingTop: 5,
          paddingBottom: 5,
          backgroundColor: "#E5E5E5",
          marginBottom: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 12 }}>
          {" "}
          Lunch Box Lists{" "}
        </Text>
      </View>
      <View>
        <Item/>
        <Item/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Items;
