import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import BookingScreen from '../Screens/BookingScreen.jsx/BookingScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '../Utils/Colors';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY
    }}>
    <Tab.Screen name="Home" component={HomeScreen}
    options={{
        tabBarLabel:({color})=>(
            <Text style={{color:color, fontSize:12, marginTop:-7}}>Home</Text>
        ),
        tabBarIcon:({color,size})=>(
            <FontAwesome5 name="home" size={size} color={color} />
        )
    }}

    />
    <Tab.Screen name="Booking" component={BookingScreen} 
    options={{
        tabBarLabel:({color})=>(
            <Text style={{color:color, fontSize:12, marginTop:-7}}>Booking</Text>
        ),
        tabBarIcon:({color,size})=>(
            <FontAwesome5 name="bookmark" size={size} color={color} />
        )
    }}
    />
    <Tab.Screen name="Profile" component={ProfileScreen} 
    options={{
        tabBarLabel:({color})=>(
            <Text style={{color:color, fontSize:12, marginTop:-7}}>Profile</Text>
        ),
        tabBarIcon:({color,size})=>(
            <FontAwesome5 name="user-circle" size={size} color={color} />
        )
    }}
    />
    </Tab.Navigator>
  )
}