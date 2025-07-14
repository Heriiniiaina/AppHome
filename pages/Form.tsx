import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Form() {
  const [selectedLang, setSelectedLang] = useState('');
    const valid = ()=>{
        
    }
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Sélectionnez une langue :</Text>

      <Picker
        selectedValue={selectedLang}
        onValueChange={(itemValue) => setSelectedLang(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Choisir..." value="" />
        <Picker.Item label="Simon" value="simon" />
        <Picker.Item label="Lanja" value="lanja" />
        <Picker.Item label="Desson" value="desson" />
      </Picker>

      {selectedLang !== '' && (
        <Text style={styles.result}>Langue choisie : {selectedLang}</Text>
      )}
      {
        
        selectedLang != "" ?    <Button title='Valider' onPress={}/> : null
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  picker: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    height: 50,
  },
  result: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
