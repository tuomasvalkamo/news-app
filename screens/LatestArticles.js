import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import NewsFeed from '../components/NewsFeed';

const API_LATEST = 'search_by_date?tags=story'

function LatestArticles() {
  return (
    <ScrollView style={styles.container}>
      <NewsFeed urlAppendix={API_LATEST} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
})

export default LatestArticles
