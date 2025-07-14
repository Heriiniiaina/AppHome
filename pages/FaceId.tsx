import axios from 'axios';
import * as ImageManipulator from 'expo-image-manipulator';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

type Props = {
  nom:string
}
export default function FaceAuthScreen({nom}:Props) {
  const [image1, setImage1] = useState(null);
  const [referenceImageName, setReferenceImageName] = useState(`${nom}.jpg`);
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const pickImage = async () => {
    const result = await ImagePicker.launchCameraAsync({ base64: false });

    if (!result.canceled) {
      const manipulatedImage = await ImageManipulator.manipulateAsync(
        result.assets[0].uri,
        [{ resize: { width: 400 } }],
        { compress: 0.7, format: ImageManipulator.SaveFormat.JPEG }
      );
      setImage1(manipulatedImage);

      // Appel direct à compare après avoir obtenu l’image
      await compare(manipulatedImage);
    }
  };

  const compare = async (image) => {
    setLoading(true); // Afficher le loader

    const formData = new FormData();

    formData.append('image1', {
      uri: image.uri,
      name: 'image1.jpg',
      type: 'image/jpeg',
    });

    formData.append('image2_name', referenceImageName);

    try {
      const res = await axios.post('http://192.168.43.199:8001/compare', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const confidence = res.data.confidence;
      setScore(confidence);
    } catch (err) {
      console.error('Erreur de comparaison :', err);
    } finally {
      setLoading(false); // Masquer le loader même en cas d'erreur
    }
  };

  useEffect(() => {
    if (score !== null) {
      const timeout = setTimeout(() => {
        if (score >= 60) {
          router.push('/home');
        } else {
          router.push('/verification');
        }
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [score]);

  return (
    <View style={styles.container}>
      {loading ? (
        <>
          <ActivityIndicator size="large" color="#007AFF" />
          <Text style={{ marginTop: 10 }}>Vérification en cours...</Text>
        </>
      ) : (
        <>
          <Button title="Prendre une photo" onPress={pickImage} />

         

          {score !== null && (
            <Text style={{ marginTop: 20, fontSize: 18 }}>
             
            </Text>
          )}
        </>
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
  input: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 8,
    width: '80%',
    borderRadius: 5,
  },
});
