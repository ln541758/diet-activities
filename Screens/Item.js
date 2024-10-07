import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ItemsList from '../Components/ItemsList'
import Style from '../Components/Style'
import { ScrollView } from 'react-native-gesture-handler'

export default function Item() {
  return (
    <ScrollView contentContainerStyle={Style}>

      <ItemsList/>

    </ScrollView>
  )
}

const styles = StyleSheet.create({})