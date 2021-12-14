import React from 'react'
import { View, Text, StyleSheet, Button, Pressable, Alert } from 'react-native'
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

  const handleResetPress = () => {
    props.onResetPress()
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
      />
      <Pressable
        onPress={() => handleResetPress()}
      >
        <Text style={styles.resetText}>Reset search</Text>
      </Pressable>
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
  searchInput: {
    fontSize: 16
  },
  radioButtonGroup: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row'
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 5
  },
  resetText: {
    textAlign: 'center',
    paddingTop: 15
  }
})

export default SearchContainer
