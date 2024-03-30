import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Icon } from 'react-native-paper'

import { CameraContainer } from '../camera/CameraScreen'
import { Profile } from '../profile/Profile'
import { QRList } from '../qrList/QRList'
import { QRScan } from '../qrScan/QRScan'
import { TabParamList } from '../../routes/Routes'

const Tab = createMaterialBottomTabNavigator<TabParamList>()

export const HomeScreen = () => {
  return (
    <Tab.Navigator labeled={false}>
      <Tab.Screen
        name='QRScanScreen'
        component={CameraContainer}
        options={{
          tabBarIcon: ({ color }) => <Icon source={'camera'} color={color} size={24} />,
        }}
      />
      <Tab.Screen
        name='QRCodeScreen'
        component={QRScan}
        options={{
          tabBarIcon: ({ color }) => <Icon source={'qrcode'} color={color} size={24} />,
        }}
      />
      <Tab.Screen
        name='QRListScreen'
        component={QRList}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon source={'format-list-bulleted'} color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name='ProfileScreen'
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => <Icon source={'account-outline'} color={color} size={24} />,
        }}
      />
    </Tab.Navigator>
  )
}
