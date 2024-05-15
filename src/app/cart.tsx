import { View, Text } from 'react-native'
import React from 'react'
import { useContext } from 'react'
import { CartContext, useCart } from '../providers/CartProvider'
import { CartItem } from '../types'



const CartScreen = () => {
  const {items} = useCart()
  return (
    <View>
      <Text>Cart items length: {items.length}</Text>
    </View>
  )
}

export default CartScreen