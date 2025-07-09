import axios from "axios";
import React from "react";
import { Button, View } from "react-native";

const Home = () => {
  const serveur = "http://192.168.42.1:8000";
  const ft_test = async () => {
    try {
      await axios.post(`${serveur}/test`);
      console.log("test envoye");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <View style={{display:"flex", alignItems:"center", justifyContent:"center", margin:"auto", width:200, height:300, padding:30, flexDirection:"column", gap:20} }>
        <Button title="Ferme forte" onPress={ft_test}></Button>
        <Button title="Allume lampe" onPress={ft_test}></Button>
      </View>
    </View>
  );
};

export default Home;
