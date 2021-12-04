import React from 'react'
import { View } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import { SwapiContext } from '../context/AppProvider'

const avatar =
  'https://images.unsplash.com/photo-1595139280770-95b6de5f0635?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=771&q=80'

export const ResultListComponent = () => {
  const { characters } = React.useContext(SwapiContext)

  return (
    <View>
      {characters?.map((l, i) => (
        <ListItem key={i} bottomDivider>
          <Avatar rounded source={{ uri: avatar }} />
          <ListItem.Content>
            <ListItem.Title>{l.name}</ListItem.Title>
            <ListItem.Subtitle>{l.gender}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  )
}
