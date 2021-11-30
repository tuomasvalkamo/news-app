import React from 'react'
import { ScrollView } from 'react-native'
import NewsFeed from './NewsFeed';

const API_LATEST = 'search_by_date?tags=story'

function LatestArticles() {
  return (
    <ScrollView>
      <NewsFeed urlAppendix={API_LATEST} />
    </ScrollView>
  )
}

export default LatestArticles
