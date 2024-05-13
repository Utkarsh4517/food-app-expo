import { StyleSheet, Image, FlatList } from "react-native";

import products from "@/assets/data/products";
import ProdctListItem from "@/src/components/ProductListItem";

export default function TabOneScreen() {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProdctListItem product={item} />}
      numColumns={2}
      contentContainerStyle={{gap: 10, padding: 10}}
      columnWrapperStyle={{gap: 10}}
    />
  );
}
