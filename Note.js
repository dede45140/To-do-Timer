import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
 import Date from './date'

const Note = (props) => {

  return (
    
      <View style={styles.itemLeft}>
      <View style={styles.item}>
      <Date />
           
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  
  itemText: {
    maxWidth: '80%',
  },
  
});

export default Note;
