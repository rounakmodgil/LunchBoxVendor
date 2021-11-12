import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { updateVendor } from "../../api/apifunction";

export default function ProfileEdit({navigation}){
  const [businessname, setBusinessName] = useState("");
  const [regno, setRegNo] = useState("");
  const [gstno, setGstNo] = useState("");
  const [foodlicense, setFoodLicense] = useState("");
  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [newpasswordcp, setNewPasswordCp] = useState("");

  const handleSubmit = async() => {
    const res = await updateVendor( businessname, regno, gstno, foodlicense, name,  phonenumber, email, city, address, landmark, state, pincode, password);
    console.log(res.data);
    if (res) {
      alert("Succesfully updated")
    } else {
      alert("Something Went Wrong. Please try again");
    }
   };

    return (
      <SafeAreaView style={styles.mainContainer}>
        <ScrollView>
          <View style={styles.mainWrapper}>
            <View>
              <View style={styles.inputContainer}>
                <Text style={{ color: "#838383" }}>Business Name</Text>
                <TextInput
                  style={styles.input}
                  value={businessname}
                  onChangeText={setBusinessName}
                ></TextInput>
              </View>
              <View style={styles.inputContainer}>
                <Text style={{ color: "#838383" }}>Name</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setName}
                  value={name}
                ></TextInput>
              </View>
              <View style={styles.inputContainer}>
                <Text style={{ color: "#838383" }}>Email</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setEmail}
                  value={email}
                ></TextInput>
              </View>
              <View style={styles.inputContainer}>
                <Text style={{ color: "#838383" }}>Phone Number</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setPhonenumber}
                  value={phonenumber}
                ></TextInput>
              </View>
              <View style={styles.inputContainer}>
                <Text style={{ color: "#838383" }}>Registration Number</Text>
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  onChangeText={setRegNo}
                  value={regno}
                ></TextInput>
              </View>
              <View style={styles.inputContainer}>
                <Text style={{ color: "#838383" }}>GST Number</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setGstNo}
                  value={gstno}
                ></TextInput>
              </View>
              <View style={styles.inputContainer}>
                <Text style={{ color: "#838383" }}>Food License Number</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setFoodLicense}
                  value={foodlicense}
                ></TextInput>
              </View>
              <View style={styles.inputContainer}>
                <Text style={{ color: "#838383" }}>Address</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setAddress}
                  value={address}
                ></TextInput>
              </View>
              <View style={styles.inputContainer}>
                <Text style={{ color: "#838383" }}>Landmark</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setLandmark}
                  value={landmark}
                ></TextInput>
              </View>
              <View style={styles.inputContainer}>
                <Text style={{ color: "#838383" }}>City</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setCity}
                  value={city}
                ></TextInput>
              </View>
              <View style={styles.inputContainer}>
                <Text style={{ color: "#838383" }}>State</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setState}
                  value={state}
                ></TextInput>
              </View>
              <View style={styles.inputContainer}>
                <Text style={{ color: "#838383" }}>Pincode</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setPincode}
                  value={pincode}
                ></TextInput>
              </View>
              <View style={styles.inputContainer}>
                <Text style={{ color: "#838383" }}>New Password</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setNewPassword}
                  value={newpassword}
                ></TextInput>
              </View>
              <View style={styles.inputContainer}>
                <Text style={{ color: "#838383" }}>Confirm New Password</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setNewPasswordCp}
                  value={newpasswordcp}
                ></TextInput>
              </View>
            </View>
            <View
              style={{
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <TouchableOpacity onPress={()=>{handleSubmit()}}>
                <View style={styles.savechangescontainer}>
                  <Text
                    style={{
                      fontSize: 16,
                      paddingHorizontal: 25,
                      paddingVertical: 10,
                      color: "#ffffff",
                    }}
                  >
                    Save Changes
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    ); 
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  mainWrapper: {
    margin: 10,
  },
  headingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headingText: {
    fontSize: 16,
    marginLeft: 5,
    fontWeight: "bold",
  },
  input: {
    borderBottomColor: "#C4C4C4",
    borderBottomWidth: 1,
    color: "black",
  },
  input2: {
    backgroundColor: "#eaeaea",
    borderBottomColor: "#C4C4C4",
    borderBottomWidth: 1,
  },
  inputContainer: {
    marginBottom: 10,
    marginTop: 25,
  },
  savechangescontainer: {
    backgroundColor: "#098D73",
    borderRadius: 30,
  },
});
