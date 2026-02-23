import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { Tabs } from 'expo-router'
import React from 'react'

export default function _layout() {
    return (
        <Tabs>
            <Tabs.Screen
                name='home'
                options={{
                    title: 'Home',
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesome5 name='home' size={size} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesome5 name='user-tie' size={size} color={color} />
                    )
                }}
            />
        </Tabs>
    )
}