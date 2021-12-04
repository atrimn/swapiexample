import React from 'react'
import { Header } from 'react-native-elements'

export const HeaderComponent = (props) => {
  return (
    <Header
      placement='center'
      centerComponent={{ text: 'Swapi Consumer', style: { color: '#fff' } }}
    />
  )
}
