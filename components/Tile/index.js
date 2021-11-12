import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MaIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Tile({ image, text1, text2, color }) {
  return (
    <View style={styles.tile}>
     <MaIcon name={image} size={27} color={color} />
      <View style={{paddingTop:5}}>
        <Text style={{ textAlign: "center", fontSize:11, color:"#111" }}>{text1}</Text>
        <Text style={{ textAlign: "center", fontSize:11, color:"#111" }}>{text2}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    overflow: "hidden",
    height: 80,
    width: 110,
    backgroundColor: "#eee",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,

    elevation: 5,
  },
});