import React from "react";
import { Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

// Icons
import { Ionicons } from '@expo/vector-icons';

const placeDetail = (props) => {
  let modalContent = null;

  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image source={ props.selectedPlace.image } style={ styles.placeImage } />
        <Text style={ styles.placeName }>{ props.selectedPlace.name }</Text>
      </View>
    );
  }

  return (
    <Modal 
      visible={ props.selectedPlace !== null }
      animationType='slide'
      onRequestClose={ props.onModalClose }
    >
      <View style={ styles.modalContainer }>
        { modalContent }
        <View>
          {/* <Button title='Delete' color='red' onPress={ props.onItemDeleted } /> */}
          <TouchableOpacity onPress={ props.onItemDeleted } style={ styles.deleteButton }>
            <Ionicons name="md-trash" size={32} color="red" />
          </TouchableOpacity>
          <Button title='Close' color='grey' onPress={ props.onModalClose } />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  placeImage: {
    width: '100%',
    height: 200
  },
  placeName: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  deleteButton: {
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10
  }
});

export default placeDetail;