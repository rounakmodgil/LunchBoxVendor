import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from "react-native";

import { Picker } from "@react-native-picker/picker";
import RadioContainer from "../../components/RadioContainer";
import ImagePicker from "react-native-image-crop-picker";
import MaIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FaIcon from "react-native-vector-icons/FontAwesome5";
import RBSheet from "react-native-raw-bottom-sheet";

const AddItem = ({ navigation }) => {
  const [status, setStatus] = useState(-1);
  const [selectedValue, setSelectedValue] = useState();
  const [checked, setChecked] = useState("first");
  const [veg, setVeg] = useState(false);
  const [nonveg, setNonveg] = useState(false);
  const [millet, setMillet] = useState(false);
  const [regimage, regsetImage] = useState(null);
  const regref = useRef();

  const reguploadfromlib = (setter) => {
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true,
      includeBase64: true,
    }).then((image) => {
      console.log(image);
      regsetImage(image);
      regref.current.close();
    });
  };
  const reguploadfromcamera = () => {
    ImagePicker.openCamera({
      width: 200,
      height: 200,
      cropping: true,
    }).then((image) => {
      console.log(image);
      regsetImage(image);
      regref.current.close();
    });
  };
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View
        style={{
          paddingTop: 5,
          paddingBottom: 5,
          backgroundColor: "#E5E5E5",
          marginBottom: 5,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 12 }}>
          {" "}
          Add Lunch Box{" "}
        </Text>
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        <View>
          <RadioContainer
            checked={checked}
            veg={veg}
            nonveg={nonveg}
            millet={millet}
            setChecked={setChecked}
            setVeg={setVeg}
            setNonveg={setNonveg}
            setMillet={setMillet}
          />
        </View>
        <View
          style={{
            height: 40,
            marginVertical: 20,
            borderBottomColor: "gray",
            borderBottomWidth: 1,
          }}
        >
          <Picker
            selectedValue={selectedValue}
            style={{ color: "#555" }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Select Category" value="Select Category" />
            <Picker.Item label="Cat1" value="cat1" />
          </Picker>
        </View>

        <TextInput
          style={{
            borderBottomWidth: 1,
            marginTop: 20,
            marginBottom: 15,
            color: "#000",
            borderBottomColor: status === 1 ? "#0E7783" : "gray",
          }}
          onFocus={() => {
            setStatus(1);
          }}
          onBlur={() => {
            setStatus(-1);
          }}
          placeholderTextColor="#555"
          placeholder={"Name"}
        />
        <TextInput
          style={{
            borderBottomWidth: 1,
            marginTop: 20,
            marginBottom: 15,
            color: "#000",
            borderBottomColor: status === 2 ? "#0E7783" : "gray",
          }}
          onFocus={() => {
            setStatus(2);
          }}
          onBlur={() => {
            setStatus(-1);
          }}
          placeholderTextColor="#555"
          placeholder={"Price"}
        />
        <TextInput
          style={{
            borderBottomWidth: 1,
            marginTop: 20,
            marginBottom: 15,
            color: "#000",
            borderBottomColor: status === 3 ? "#0E7783" : "gray",
          }}
          onFocus={() => {
            setStatus(3);
          }}
          onBlur={() => {
            setStatus(-1);
          }}
          placeholderTextColor="#555"
          placeholder={"Discount in %"}
        />
        <TextInput
          style={{
            borderBottomWidth: 1,
            marginTop: 20,
            marginBottom: 15,
            color: "#000",
            borderBottomColor: status === 4 ? "#0E7783" : "gray",
          }}
          onFocus={() => {
            setStatus(4);
          }}
          onBlur={() => {
            setStatus(-1);
          }}
          placeholderTextColor="#555"
          placeholder={"Tax"}
        />
        <View style={styles.inputContainer}>
            <Text style={{ color: "black", fontWeight:"300" }}>Upload Image : </Text>
            <TouchableNativeFeedback onPress={() => regref.current.open()}>
              <View style={styles.uploadphoto}>
                {regimage != null && (
                  <FaIcon name={"check-circle"} color={"green"} size={18} />
                )}
                {regimage === null && (
                  <View
                    style={{
                      alignItems: "center",
                      height: 30,
                      width: 80,
                      backgroundColor: "gray",
                      justifyContent: "center",
                      borderRadius: 7,
                    }}
                  >
                    <View>
                      <Text style={{ fontSize: 10, color: "#fff" }}>
                        Upload Image
                      </Text>
                    </View>
                  </View>
                )}
              </View>
            </TouchableNativeFeedback>
          </View>
          <TextInput
          style={{
            borderBottomWidth: 1,
            marginTop: 20,
            marginBottom: 15,
            color: "#000",
            borderBottomColor: status === 5 ? "#0E7783" : "gray",
          }}
          onFocus={() => {
            setStatus(5);
          }}
          onBlur={() => {
            setStatus(-1);
          }}
          placeholderTextColor="#555"
          placeholder={"Item 1"}
        />
        <TextInput
          style={{
            borderBottomWidth: 1,
            marginTop: 20,
            marginBottom: 15,
            color: "#000",
            borderBottomColor: status === 6 ? "#0E7783" : "gray",
          }}
          onFocus={() => {
            setStatus(6);
          }}
          onBlur={() => {
            setStatus(-1);
          }}
          placeholderTextColor="#555"
          placeholder={"Item 2"}
        />
        <TextInput
          style={{
            borderBottomWidth: 1,
            marginTop: 20,
            marginBottom: 15,
            color: "#000",
            borderBottomColor: status === 7 ? "#0E7783" : "gray",
          }}
          onFocus={() => {
            setStatus(7);
          }}
          onBlur={() => {
            setStatus(-1);
          }}
          placeholderTextColor="#555"
          placeholder={"Item 3"}
        />
        <TouchableOpacity>
          <View style={styles.container3}>
            <Text style={styles.text2}>Add</Text>
          </View>
        </TouchableOpacity>
      </View>
      <RBSheet
          ref={regref}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            wrapper: {
              backgroundColor: "transparent",
            },
            draggableIcon: {
              backgroundColor: "#000",
            },
          }}
        >
          <View>
            <TouchableWithoutFeedback onPress={reguploadfromlib}>
              <View
                style={{
                  flexDirection: "row",
                  padding: 10,
                  alignItems: "center",
                }}
              >
                <MaIcon name={"folder-image"} size={25} color="gray" />
                <Text style={styles.popuptext}> Upload from Gallery</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableNativeFeedback onPress={reguploadfromcamera}>
              <View
                style={{
                  flexDirection: "row",
                  padding: 10,
                  alignItems: "center",
                }}
              >
                <MaIcon name={"camera"} size={25} color="gray" />
                <Text style={styles.popuptext}> Take a photo</Text>
              </View>
            </TouchableNativeFeedback>
            <View
              style={{
                flexDirection: "row",
                padding: 10,
                alignItems: "center",
              }}
            >
              <MaIcon name={"logout"} size={25} color="gray" />
              <Text style={styles.popuptext}> Cancel</Text>
            </View>
          </View>
        </RBSheet>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  container3: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    marginHorizontal: 35,
    borderColor: "#098D73",
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 25,
    backgroundColor: "#098D73",
    justifyContent: "center",
    alignItems: "center",
  },
  text2: {
    color: "white",
    fontSize: 16,
  },
  inputContainer: {
    marginBottom: 10,
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-between",
    width:"100%"
  },
});

export default AddItem;
