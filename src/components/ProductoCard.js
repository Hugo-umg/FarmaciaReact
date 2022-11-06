import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

export default function ProductoCard(props) {
  const { producto } = props;

  const goToProducto = () => {
    console.log(`Al producto ${producto.descripcion}`);
  };

  return (
    <TouchableWithoutFeedback onPress={goToProducto}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={styles.bgStyles}>
            <Image source={{ uri: producto.imagen_nombre }} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    backgroundColor: "grey",
  },
});
