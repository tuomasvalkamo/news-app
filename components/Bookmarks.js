import React, { useState, useEffect } from 'react'
import { View, ScrollView, StyleSheet, Button, Text } from 'react-native'
import Articles from './Articles'
import { loadBookmarks, clearStorage } from './AsyncStorage'

import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

function Bookmarks() {
  // Redux state management
  const bookmarks = useSelector(state => state.bookmarks)
  const dispatch = useDispatch()
  const { setBookmarksFromDB } = bindActionCreators(actionCreators, dispatch)

  useEffect(() => {
    setBookmarkData()
  }, [])

  const setBookmarkData = async () => {
    // Load bookmarks from AsyncStorage
    const values = await loadBookmarks()
    // Set Redux state to equal AsyncStorage
    setBookmarksFromDB(values)

    console.log(values)
  }

  return (
    <ScrollView style={styles.container}>
      <Button title="load" onPress={() => setBookmarkData()} />
      <Button title="clear" onPress={() => clearStorage()} />
      <Button title="log redux bookmarks" onPress={() => console.log('Redux state: ' + JSON.stringify(bookmarks))} />

      {bookmarks.length != 0 ?
        <Articles articles={bookmarks} articlesAreAlsoBookmarks={true} />
        : <Text>You haven't bookmarked anything yet.</Text>
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
})

export default Bookmarks
