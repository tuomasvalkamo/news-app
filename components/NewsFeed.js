import React, { useState, useEffect } from 'react';
import { View } from 'react-native'
import Articles from './Articles'

const API_URL = 'https://hn.algolia.com/api/v1/'
const HITS_PER_PAGE = '&hitsPerPage=50'

function NewsFeed(props) {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetchArticles()
  }, [props.urlAppendix])

  async function fetchArticles() {
    try {
      console.log('Fetching articles... url: ' + props.urlAppendix)
      const response = await fetch(`${API_URL}${props.urlAppendix}${HITS_PER_PAGE}`)
      const results = await response.json()
      console.log('Fetch complete!')

      if (response.ok) {
        console.log('Fetched articles successfully')
        // Filter out articles without a URL (Hacker news posts) 
        // and save the rest to state
        filterArticles(results.hits)
      } else {
        console.log('Failed to fetch articles! Response not OK.')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const filterArticles = (data) => {
    let newArticles = []

    for (let i = 0; i < data.length; i++) {
      if (data[i].url) {
        newArticles = [...newArticles, data[i]]
      }
    }

    setArticles(newArticles)
  }

  return (
    <View>
      <Articles articles={articles} articlesAreAlsoBookmarks={false} />
    </View>
  )
}

export default NewsFeed
