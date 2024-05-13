import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { Product } from "../types";
import products from "@/assets/data/products";
import { defaultPizzaImage } from "../constants/default";
import { Link } from "expo-router";

type ProductListItemProps = {
  product: Product;
};
const ProdctListItem = ({ product }: ProductListItemProps) => {
  return (
    <Link href={"/product"} asChild>
    <Pressable style={styles.container}>
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </Pressable>
    </Link>

  );
};

export default ProdctListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    flex: 1,
    maxWidth: "50%",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
    color: "black",
  },

  price: {
    color: "darkgreen",
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
