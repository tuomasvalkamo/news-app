import React, { useState, useEffect } from 'react';
import { View } from 'react-native'
import Articles from './Articles'

const API_URL = 'https://hn.algolia.com/api/v1/'
const HITS_PER_PAGE = '&hitsPerPage=30'

function NewsFeed(props) {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetchArticles()
  }, [props.urlAppendix])

  async function fetchArticles() {
    try {
      const response = await fetch(`${API_URL}${props.urlAppendix}${HITS_PER_PAGE}`)
      const results = await response.json()

      if (response.ok) {
        // Filter out articles without a URL (= Hacker news' own posts)
        const filteredArticles = filterArticles(results.hits)
        setArticles(filteredArticles)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const filterArticles = (data) => {
    let newArticles = []

    data.forEach(article => {
      if (article.url) {
        newArticles = [...newArticles, article]
      }
    })

    return newArticles
  }

  return (
    <View>
      <Articles articles={articles} articlesAreAlsoBookmarks={false} />
    </View>
  )
}

export default NewsFeed
