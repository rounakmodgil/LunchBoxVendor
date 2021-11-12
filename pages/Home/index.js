import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
  Switch,
} from "react-native";
import Tile from "../../components/Tile";
import Box from "../../assets/box.png";
import MaIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Delivery from "../../assets/shop.png";
import DeliveryOne from "../../assets/shop.png";


export default function Home({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <ScrollView>
      <SafeAreaView style={styles.page5container}>
        <View style={{ justifyContent: "center" }}>
          <View
            style={{
              backgroundColor: "#1AB394",
              height: 200,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
                marginTop: 20,
                textAlign: "center",
              }}
            >
              LUNCH BOX VENDOR
            </Text>
            <View
              style={{
                justifyContent: "flex-end",
                flexDirection: "row",
                marginTop: -30,
                marginRight: 10,
              }}
            >
              <Pressable
                onPress={() => {
                  navigation.navigate("Notifications");
                }}
              >
                <MaIcon name="bell-outline" size={30} color="white" />
              </Pressable>
    
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#EEE",
              borderRadius: 10,
              width: "90%",
              height: 200,
              marginTop: -100,
              marginLeft: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                margin: 20,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={Box}
                  style={{ height: 50, width: 50, borderRadius: 25 }}
                />
                <Text style={{color:"#111"}}> Karthik Gandhi</Text>
              </View>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 30,
                marginTop: 40,
              }}
            >
              <View>
                <Text style={{color:"#555"}}>Total Orders</Text>
                <Text style={{color:"#555", textAlign: "center" }}>767s</Text>
              </View>
              <View>
                <Text style={{color:"#555"}}>Completed</Text>
                <Text style={{ color:'#555', textAlign: "center" }}>767s</Text>
              </View>
              <View>
                <Text style={{color:"#555"}}>Earned</Text>
                <Text style={{ color:"#555", textAlign: "center" }}>12000</Text>
              </View>
            </View>
          </View>
          <Pressable
            onPress={() => {
              navigation.navigate("franchiseneworders");
            }}
          >
            <View
              style={{
                marginTop: 40,
                height: 150,
                backgroundColor: "#EEE",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <View>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 24,
                    fontWeight: "bold",
                    color: "#555",
                  }}
                >
                  10 New Orders
                </Text>
                <Text
                  style={{ fontSize: 16, marginTop: 5, textAlign: "center", color:"#555" }}
                >
                  Waiting For You
                </Text>
              </View>
              {isEnabled && (
                <Image
                  source={Delivery}
                  style={{ height: 80, width: 80, resizeMode: "contain" }}
                />
              )}
              {!isEnabled && (
                <Image
                  source={DeliveryOne}
                  style={{ height: 80, width: 80, resizeMode: "contain" }}
                />
              )}
            </View>
          </Pressable>
          <View>
            <View
              style={{
                marginTop: 50,
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <Pressable
                onPress={() => {
                  navigation.navigate("franchisesetup");
                }}
              >
                {isEnabled && (
                  <Tile text1="Setup" image={"cogs"} color={"#1AB394"} />
                )}
                {!isEnabled && (
                  <Tile text1="Setup" image={"cogs"} color={"gray"} />
                )}
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate("Add Item");
                }}
              >
                {isEnabled && (
                  <Tile
                    text1="Add"
                    text2="Item"
                    image={"plus-circle"}
                    color={"#1AB394"}
                  />
                )}
                {!isEnabled && (
                  <Tile
                    text1="Add"
                    text2="Item"
                    image={"plus-circle"}
                    color={"gray"}
                  />
                )}
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate("Items");
                }}
              >
                {isEnabled && (
                  <Tile text1="Items" image={"purse"} color={"#1AB394"} />
                )}
                {!isEnabled && (
                  <Tile text1="Items" image={"purse"} color={"gray"} />
                )}
              </Pressable>
    
            </View>
            <View
              style={{
                marginTop: 30,
                marginBottom:20,
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              
              <Pressable
                onPress={() => {
                  navigation.navigate("franchiseonlineorders");
                }}
              >
                {isEnabled && (
                  <Tile text1="Online" text2="Orders" image={"wallet"}  color={"#1AB394"} />
                )}
                {!isEnabled && (
                <Tile text1="Online" text2="Orders" image={"wallet"} color={"gray"} />
                )}
              </Pressable>
            </View>
  
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page5container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
});
