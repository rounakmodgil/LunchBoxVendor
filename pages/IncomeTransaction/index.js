import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Platform,
  ImageBackground,
  TextInput,
  Dimensions,
  ScrollView,
  Pressable,
  StatusBar,
  Image,
  Switch,
  TouchableOpacity,
  Modal,
  CheckBox,
} from "react-native";
const windowHeight = Dimensions.get("window").height;

export default function IncomeTransaction() {
  return (
    <SafeAreaView style={styles.page5container}>
      <View
        style={{ paddingTop: 10, alignItems: "flex-end", paddingRight: 20 }}
      >
          <View style={{flexDirection:"row"}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 20,
            marginBottom: 15,
          }}
        >
          Total Income: 
        </Text>
        <Text style={{fontSize:20, fontWeight:"bold",  marginTop: 20,
            marginBottom: 15, color:"green"}}> Rs.100000{"    "}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingLeft: 10,
          paddingRight: 10,
          marginTop: 25,
        }}
      >
        <View>
          <Text style={styles.header}>OrderID</Text>
          <Text>TCsf</Text>
        </View>
        <View>
          <Text style={styles.header}>Boy</Text>
          <Text>Boy1</Text>
        </View>
        <View>
          <Text style={styles.header}>Amount</Text>
          <Text>100</Text>
        </View>
        <View>
          <Text style={styles.header}>Date{"&"}Time</Text>
          <Text>12th June</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page5container: {
    flexDirection: "column",
    flex: 1,
    overflow: "hidden",
    backgroundColor:"#fff",
    paddingHorizontal:10
  },
  header:{
      fontWeight:"bold",
      marginBottom:10
  }
});