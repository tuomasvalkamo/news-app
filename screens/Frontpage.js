import React, { useState } from 'react';
import { StyleSheet, ScrollView, Alert, StatusBar } from 'react-native'
import NewsFeed from '../components/NewsFeed';
import SearchContainer from '../components/SearchContainer';
import { colors } from '../colors'

const API_SEARCH = 'search_by_date?query='
const API_URL_SEARCH = '&restrictSearchableAttributes=url'
const API_FRONTPAGE = 'search?tags=front_page'

function Frontpage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [radioValue, setRadioValue] = useState('Title')
  const [apiUrl, setApiUrl] = useState(API_FRONTPAGE)

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
      createAlert()
    }
  }

  const handleFeedReset = () => {
    setApiUrl(API_FRONTPAGE)
  }

  const createAlert = () => {
    Alert.alert(
      "Empty search term.",
      "Please enter text to search box.",
      [
        { text: "OK" }
      ],
      {
        cancelable: true // Android users can click outside of box to dismiss
      }
    )
  }

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.color1} />
      <SearchContainer
        onSearchTermChange={handleSearchTermChange}
        onRadioValueChange={handleRadioButtonChange}
        onButtonPress={handleButtonPress}
        onResetPress={handleFeedReset}
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
