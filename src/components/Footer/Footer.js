import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './Footer.styles';

const Footer = ({newTitle, setNewTitle, addNewTodo}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={newTitle}
        placeholder="What you want to do"
        placeholderTextColor="#86888A"
        onChangeText={text => setNewTitle(text)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => addNewTodo(newTitle)}>
        <Text style={styles.button_text}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
