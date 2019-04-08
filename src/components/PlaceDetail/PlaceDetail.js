import React from "react";
import { Modal, View, Image, Text, Button, StyleSheet } from "react-native";

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
          <Button title='Delete' color='red' onPress={ props.onItemDeleted } />
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
  }
});

export default placeDetail;