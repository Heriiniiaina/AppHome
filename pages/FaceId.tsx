import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function FaceAuthScreen() {
  const [image1, setImage1] = useState(null); 
  const [image2, setImage2] = useState(null); 
  const [score, setScore] = useState(null);

  const pickImage = async (setImage) => {
    const result = await ImagePicker.launchCameraAsync({ base64: false });
    if (!result.canceled) setImage(result.assets[0]);
  };

  const compare = async () => {
    const formData = new FormData();

    formData.append('image1', {
      uri: image1.uri,
      name: 'image1.jpg',
      type: 'image/jpeg',
    });

    formData.append('image2', {
      uri: image2.uri,
      name: 'image2.jpg',
      type: 'image/jpeg',
    });

    try {
        console.log(formData['image1'])
      const res = await axios.post('http://192.168.42.99:8001/compare', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const confidence = res.data.confidence;
      setScore(confidence);
    } catch (err) {
      console.error('Erreur de comparaison :', err);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="photo 1" onPress={() => pickImage(setImage1)} />
      <Button title="photo 2" onPress={() => pickImage(setImage2)} />

      {image1 && <Image source={{ uri: image1.uri }} style={styles.image} />}
      {image2 && <Image source={{ uri: image2.uri }} style={styles.image} />}

      <Button title="Comparer" onPress={compare} />

      {score !== null && (
        <Text style={{ marginTop: 20, fontSize: 18 }}>
          Score : {score} % {score >= 50 ? 'ok' : 'nom'}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    marginVertical: 10,
    borderRadius: 10,
  },
});
