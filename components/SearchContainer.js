import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { RadioButton } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';

function SearchContainer(props) {

  const handleTextChange = (text) => {
    props.onSearchTermChange(text)
  }

  const handleRadioChange = (value) => {
    props.onRadioValueChange(value)
  }

  const handleButtonPress = () => {
    props.onButtonPress()
  }

  return (
    <View style={styles.container}>
      <View>
        <Searchbar
          placeholder="Search"
          onChangeText={text => handleTextChange(text)}
          value={props.searchValue}
          style={styles.searchBox}
          inputStyle={styles.searchInput}
        />
      </View>

      <View style={styles.radioButtonGroup}>
        <View style={styles.radioButtonContainer}>
          <RadioButton
            value="Title"
            status={props.radioValue === 'Title' ? 'checked' : 'unchecked'}
            onPress={() => handleRadioChange('Title')}
            color="red"
          />
          <Text>Title</Text>
        </View>
        <View style={styles.radioButtonContainer}>
          <RadioButton
            value="URL"
            status={props.radioValue === 'URL' ? 'checked' : 'unchecked'}
            onPress={() => handleRadioChange('URL')}
            color="red"
          />
          <Text>Website</Text>
        </View>
      </View>

      <Button
        title="Search"
        onPress={() => handleButtonPress()}
        style={styles.button}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    marginBottom: 20
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#dbdbdb',
    paddingRight: 12
  },
  searchBox: {

  },
  searchInput: {
    fontSize: 16
  },
  radioButtonGroup: {
    marginTop: 10,
    flexDirection: 'row'
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 5
  },
  button: {

  }
})

export default SearchContainer
