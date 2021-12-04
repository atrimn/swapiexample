import React, { useEffect } from 'react'

export const SwapiContext = React.createContext()

const SwapiProvider = (props) => {
  const [searchInput, setSearchInput] = React.useState('')
  const [characters, setCharacters] = React.useState([])
  const [searchResults, setSearchResults] = React.useState([])

  useEffect(() => {
    handleSubmitSearch()
  }, [])

  const handleSearchInput = (text) => {
    console.log(text)
    setSearchInput(text)
    const result = characters.filter((character) =>
      character.name.includes(searchInput)
    )
    setCharacters(result)
  }

  const handleSubmitSearch = async () => {
    setSearchInput('')
    const results = await fetch('https://swapi.dev/api/people').then((res) =>
      res.json()
    )
    setCharacters(results.results.sort((a, b) => a.name.localeCompare(b.name)))
    console.log(results)
  }

  return (
    <SwapiContext.Provider
      value={{
        searchInput,
        characters,
        handleSearchInput,
        handleSubmitSearch,
      }}
    >
      {props.children}
    </SwapiContext.Provider>
  )
}

export default SwapiProvider
