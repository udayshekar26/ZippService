import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Header from './Header'
import Slider from './Slider'
import Category from './Categories'
import GlobalApi from '../../Utils/GlobalApi'

export default function HomeScreen() {

  

  return (
    <View>
      <Header/>
      <View style={{padding:20,}}>
      <Slider/>
      <Category/>
      </View>
    </View>
  )
}