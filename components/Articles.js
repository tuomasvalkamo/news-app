import React from 'react'
import { View, Text } from 'react-native'
import Article from './Article'

function Articles(props) {

  return (
    <View>
      {props.articles ? props.articles.map((article, index) => {
        return (
          <Article
            key={index}
            objectID={article.objectID}
            title={article.title}
            url={article.url}
            date={article.created_at}
          />
        )
      }) : <Text>No articles found.</Text>}
    </View>
  )
}

export default Articles
