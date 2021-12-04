import React, { useContext } from 'react'
import { SearchBar } from 'react-native-elements'
import { SwapiContext } from '../context/AppProvider'
import { Button } from 'react-native-elements'

export const SearchbarComponent = (props) => {
  const { searchInput, handleSearchInput, handleSubmitSearch } =
    useContext(SwapiContext)
  return (
    <>
      <SearchBar
        onClear={() => handleSubmitSearch()}
        placeholder='Type Here...'
        onChangeText={(text) => handleSearchInput(text)}
        value={searchInput}
        lightTheme
      />
      {/* <Button onPress={handleSubmitSearch} title={'search'} /> */}
    </>
  )
}
