import React, {useState} from 'react';
import {
View, StyleSheet,ScrollView,
TextInput
} from 'react-native';
import OnlineOrderItem from '../../components/OnlineOrderItem';
import FaIcon from "react-native-vector-icons/FontAwesome5";


const OnlineOrders = ({navigation}) => {
    const [query, setQuery] = useState("");

  return (
    <View style={styles.container}>
      <ScrollView>
      <View
          style={{
            marginTop:5,
            flexDirection: "row",
            borderWidth: 0.4,
            borderColor: "#AAA",
            borderRadius: 50,
            paddingHorizontal: 8,
            width: "95%",
            alignItems: "center",
            alignSelf: "center",
            marginBottom: 10,
          }}
        >
           <FaIcon name={"search"} size={18} color={"#CCC"}/>
           <TextInput
            placeholder="Search any item "
            placeholderTextColor={"gray"}
            style={{ flex: 1, height: 40, color: "white" , marginLeft:5}}
            value={query}
            onChangeText={(text) => handleSearch(text)}
          ></TextInput>
        </View>
      
      <View>
        <OnlineOrderItem pack={1} navigation={navigation} />
        <OnlineOrderItem pack={0} navigation={navigation} />
        <OnlineOrderItem pack={0} navigation={navigation} />

      </View>
      </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white",
    paddingTop:10
  }

});

export default OnlineOrders;
