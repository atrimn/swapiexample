import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, ScrollView, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import SwapiProvider from './src/context/AppProvider'
import { HeaderComponent } from './src/components/Header'
import { SearchbarComponent } from './src/components/Searchbar'
import { ResultListComponent } from './src/components/ResultList'

export default function App() {
  return (
    <SwapiProvider>
      <SafeAreaProvider>
        <HeaderComponent />
        <View style={styles.container}>
          <SearchbarComponent />
          <ScrollView>
            <ResultListComponent />
          </ScrollView>
          <StatusBar style='auto' />
        </View>
      </SafeAreaProvider>
    </SwapiProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
