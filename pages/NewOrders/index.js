import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  Modal,
} from "react-native";
import { DataTable } from "react-native-paper";
import CheckBox from "@react-native-community/checkbox";
import FaIcon from "react-native-vector-icons/FontAwesome5";


export default function NewOrders() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState(false);
  return (
    <SafeAreaView style={styles.page5container}>
      <View style={{ paddingTop: 30 }}>
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
          <Text style={{ fontWeight: "bold", fontSize: 12 }}> Orders </Text>
        </View>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Order ID</DataTable.Title>
            <DataTable.Title>Customer ID</DataTable.Title>
            <DataTable.Title>T Boy ID</DataTable.Title>
            <DataTable.Title>Date & Time</DataTable.Title>
            <DataTable.Title>More</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell>12345</DataTable.Cell>
            <DataTable.Cell>09876</DataTable.Cell>
            <DataTable.Cell>746483</DataTable.Cell>
            <DataTable.Cell>12th Oct, 5:00pm</DataTable.Cell>
            <DataTable.Cell>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
              <FaIcon
                name="angle-double-right"
                size={23}
                color={"#098D73" }
              />
              </TouchableOpacity>
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </View>
    
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>OrderID: TORD986</Text>

            <Text style={styles.modalText}>Invoice : inv80978</Text>
            <Text style={styles.modalText}>Total items : 10</Text>
            <Text style={styles.modalText}>Dispatc at : date {"&"} time</Text>
            <Text style={styles.modalText}>ItemID: It9777</Text>
            <Text style={styles.modalText}>Item: Toordal</Text>
            <Text style={styles.modalText}>Quantity: 10</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.modalText}>Status:</Text>
              <CheckBox
                style={styles.checkbox}
                value={selected}
                onValueChange={setSelected}
              />
            </View>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page5container: {
    flexDirection: "column",
    flex: 1,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#eee",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 20,
    textAlign: "center",
    fontSize: 16,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 15,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#f0505c",
  },
  buttonClose: {
    backgroundColor: "#f0505c",
  },
  checkbox: {
    marginTop: -13,
    paddingTop: 0,
  },
});
