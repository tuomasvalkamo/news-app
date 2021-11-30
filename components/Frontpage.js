import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import NewsFeed from './NewsFeed';
import SearchContainer from './SearchContainer';

const API_SEARCH = 'search_by_date?query='
const API_URL_SEARCH = '&restrictSearchableAttributes=url'

function Frontpage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [radioValue, setRadioValue] = useState('Title')
  const [apiUrl, setApiUrl] = useState('search?tags=front_page')

  const handleSearchTermChange = (value) => {
    setSearchTerm(value)
  }

  const handleRadioButtonChange = (value) => {
    setRadioValue(value)
  }

  const handleButtonPress = () => {
    console.log('Search button pressed.')

    // Check if user has typed search term
    if (searchTerm) {
      // Create url appendix for search
      let query = API_SEARCH + searchTerm
      // Check if search should be limited to URLs
      if (radioValue === 'URL') {
        query += API_URL_SEARCH
      }

      setApiUrl(query)
    } else {
      console.log('Empty search term! Can not make search.')
    }
  }

  return (
    <ScrollView style={styles.container}>
      <SearchContainer
        onSearchTermChange={handleSearchTermChange}
        onRadioValueChange={handleRadioButtonChange}
        onButtonPress={handleButtonPress}
        searchValue={searchTerm}
        radioValue={radioValue}
      />
      <NewsFeed urlAppendix={apiUrl} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
})

export default Frontpage
