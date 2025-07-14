import { setNome } from '@/store/dataSlice';
import { Picker } from '@react-native-picker/picker';
import { router } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

export default function Form() {
  const [selectedLang, setSelectedLang] = useState('');
  const dispatch = useDispatch()  
  const valid = ()=>{
        dispatch(setNome(selectedLang))
       router.push("/verification")
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
        
        selectedLang != "" ?    <Button title='Valider' onPress={valid}/> : null
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
