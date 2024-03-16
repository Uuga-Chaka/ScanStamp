import React, { useState } from 'react'
import { Pressable, View } from 'react-native'
import { Button, Checkbox, Text, TextInput } from 'react-native-paper'
import { ScrollView } from 'react-native-gesture-handler'

import { styles } from '../../theme'
import { common, input, textNavigation } from '../../../localization/EN'

export const SignUpScreen = () => {
  const [acceptPolicy, setAcceptPolicy] = useState(false)

  return (
    <ScrollView style={{ ...styles.container }}>
      <View style={{ paddingVertical: 100 }}>
        <Text style={{ fontWeight: 'bold', marginLeft: 5 }} variant='displaySmall'>
          {common.signUp}
        </Text>
        <View style={{ display: 'flex', gap: 30, marginBottom: 60, marginTop: 60 }}>
          <TextInput mode='outlined' label={input.email} />
          <TextInput mode='outlined' label={input.validateEmail} />
          <TextInput mode='outlined' secureTextEntry label={input.password} />
          <TextInput mode='outlined' secureTextEntry label={input.validatePassword} />
          <Pressable
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => setAcceptPolicy(!acceptPolicy)}
          >
            <Checkbox status={acceptPolicy ? 'checked' : 'unchecked'} />
            <Text style={{ marginLeft: 10 }}>
              {textNavigation.dontHaveAccount} {common.signUp}
            </Text>
          </Pressable>
        </View>
        <Button mode='contained'>{common.signUp}</Button>
      </View>
    </ScrollView>
  )
}
