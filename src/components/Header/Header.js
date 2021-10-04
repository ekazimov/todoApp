import React from 'react';
import {View, Text} from 'react-native';
import styles from './Header.styles';

const Header = ({count}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.header_text}>THINGS TO DO:</Text>
      <Text style={styles.header_text}>{count}</Text>
    </View>
  );
};

export default Header;
