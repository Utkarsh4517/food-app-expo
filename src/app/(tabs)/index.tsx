import { StyleSheet, Image } from 'react-native';

import { Text, View } from '@/src/components/Themed';
import products from '@/assets/data/products';
import ProdctListItem from '@/src/components/ProductListItem';




export default function TabOneScreen() {
  return (
    <View style={{backgroundColor: 'grey'}}>
    <ProdctListItem product = {products[0]}/ >
    <ProdctListItem product = {products[1]}/ >
    </View>
  );
}
