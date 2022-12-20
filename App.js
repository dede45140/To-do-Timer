 import { StatusBar } from 'expo-status-bar';
import React, {useState, Component } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Note from './components/Note'
import Date from './components/date'
 

export default function App() {
  
 
  const [note, setNote] = useState();
  const [noteItems, setNoteItems] = useState([]);

  const handleAddNote = () => {
    Keyboard.dismiss();
    setNoteItems([...noteItems, note])
    setNote(null);
  }

  const completeItems = (index) => {
    let itemsCopy = [...noteItems];
    itemsCopy.splice(index, 1);
    setNoteItems(itemsCopy)
  }

  return (
    <View style={styles.container}>
      
        
      <StatusBar style="auto" />
      
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

    
      <View style={styles.noteWrapper}>
        <Text style={styles.sectionTitle}>Todo timer</Text>
        <Text style={styles.description}> Ecrire une chose a faire une alerte vous vous sera envoyez..</Text>
                <View style={styles.items}>
         
          {
            noteItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeItems(index)}>
                  <Note text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

      </ScrollView>

      
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeNoteWrapper}
      >
        <TextInput style={styles.input} placeholder={'Ecrire une activité a faire...'} value={note} onChangeText={text => setNote(text)} />
        <TouchableOpacity onPress={() => handleAddNote()}>
          <View >
           <Ionicons name="add-circle-outline" size={44} color="black" />
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    backgroundColor: '#E8EAED',
  },
  noteWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeNoteWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },

  description: {
  textAlign: 'center',
fontSize: 15, 
fontWeight: '300',
  },
 
   
});
