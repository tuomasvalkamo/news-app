import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'
import Articles from '../components/Articles'

import { useSelector } from 'react-redux'

function Bookmarks() {
  // Redux state management
  const bookmarks = useSelector(state => state.bookmarks)

  return (
    <ScrollView style={styles.container}>
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
