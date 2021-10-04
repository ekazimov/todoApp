import React from 'react';
import {Text, TouchableOpacity, FlatList} from 'react-native';
import styles from './TodoList.styles';

const TodoList = ({todos, longPressHandler, toggleHandler}) => {
  const renderTodo = ({item}) => (
    <TouchableOpacity
      onPress={() => toggleHandler(item.id)}
      onLongPress={() => longPressHandler(item.id)}
      style={item.completed ? styles.completed_container : styles.container}>
      <Text style={item.completed ? styles.completed_text : styles.text}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
  return (
    <FlatList
      data={todos}
      renderItem={renderTodo}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default TodoList;
