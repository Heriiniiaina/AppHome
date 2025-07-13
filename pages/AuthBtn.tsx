import * as LocalAuthentication from "expo-local-authentication";
import React, { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
type Props = {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AuthButtons({
  isAuthenticated,
  setIsAuthenticated,
}: Props) {
  const [supportedTypes, setSupportedTypes] = useState<
    ("fingerprint" | "facial")[]
  >([]);
  const [isBioSupporte, setIsBioSupporte] = useState(false)
  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync()
      const enrolled = await LocalAuthentication.isEnrolledAsync()
      if (compatible && enrolled) {
        setIsBioSupporte(true);
        const types =
          await LocalAuthentication.supportedAuthenticationTypesAsync()
        const mappedTypes: ("fingerprint" | "facial")[] = []
        types.forEach((type) => {
          if (type === LocalAuthentication.AuthenticationType.FINGERPRINT)
            mappedTypes.push("fingerprint")
          else if (
            type === LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION
          )
            mappedTypes.push("facial")
        });
        setSupportedTypes(mappedTypes)
      } else {
        setIsBioSupporte(false)
      }
    })()
  }, [])
  async function authenticate(type: "fingerprint" | "facial") {
    try {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: type === "fingerprint" ? "empreinte digitale" : type === "facial" ? "reconnaissance faciale" : "Authentifiez-vous",
        fallbackLabel: "autre",
        cancelLabel: "Annuler",
      })
      if (result.success) {
        Alert.alert("Succès", "Authentification réussie !")
        setIsAuthenticated(true);
      } else {
        Alert.alert("Erreur", "Authentification échouée")
      }
    } catch (e:any) {
      Alert.alert("Erreur", `Erreur: ${e.message}`)
    }
  }
  if (!isBioSupporte) {
    return (
      <View style={styles.container}>
        <Text>aucun capteur </Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20 }}>
        Choisissez une méthode d’authentification :
      </Text>
      {supportedTypes.map((type) => {
        let label = ""
        if (type === "fingerprint") label = "Empreinte Digitale"
        else if (type === "facial") label = "Reconnaissance Faciale"
        return (
          <View key={type} style={{ marginVertical: 5 }}>
            <Button onPress={() => authenticate(type)} title={label} />
          </View>
        )
      })}
    </View>
  )
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", paddingHorizontal: 20 },
})
