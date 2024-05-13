import { StyleSheet, Image, FlatList } from 'react-native';

import { Text, View } from '@/src/components/Themed';
import products from '@/assets/data/products';
import ProdctListItem from '@/src/components/ProductListItem';




export default function TabOneScreen() {
  return (
    <FlatList data={products} renderItem={({item}) => <ProdctListItem product={item}/> } />
  );
}
