import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text, View } from '@/src/components/Themed';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
     <Text style={styles.title}>Pizza Peperoni</Text>
     <Text style={styles.price}>$12.99</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
    color: 'black',
  },

  price : {
    color: 'darkgreen',
    fontWeight: 'bold',
  }
  
});
