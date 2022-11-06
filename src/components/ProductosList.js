import React from "react";
import { FlatList, Text, StyleSheet } from "react-native";

import ProductoCard from "./ProductoCard";

export default function ProductosList(props) {
  const { productos } = props;

  return (
    <FlatList
      data={productos}
      numColumns={1}
      showsVerticalScrollIndicator={false}
      keyExtractor={(producto) => {
        String(producto.idproducto);
      }}
      renderItem={({ item }) => <ProductoCard producto={item} />}
      contentContainerStyl={styles.flatListContentContainer}
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
});
