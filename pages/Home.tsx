import PorteAnimation from "@/components/PorteAnimation";
import axios from "axios";
import React, { useState } from "react";
import { View } from "react-native";
type Props = {
  name:string
}
const Home = () => {
  const serveur = "http://192.168.107.6:8000";
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const ft_test = async (name:string, isOpen?:boolean) => {
    try {
      await axios.post(`${serveur}/${name}/OpenCadreVitrePortePpl1.002`, {vitre:"OpenVitrePortePpl1.002", cadre:"OpenCadreVitrePortePpl1.002"});
     setIsOpen(!isOpen)
      console.log("test envoye");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <View style={{ width:200, height:300, padding:10} }>
        {/* <Button title="Ferme forte" onPress={()=>ft_test("test")}></Button>
        <Button title="Allume lampe" onPress={()=>ft_test("stop")}></Button> */}
        {/* <BtnTeste ft_test={ft_test} isOpen={isOpen} numeroPorte={1}/> */}
        <PorteAnimation cadre="OpenCadreVitrePortePpl1.002" vitre="OpenVitrePortePpl1.002" numeroPorte={1}/>
        <PorteAnimation cadre="OpenCadreVitrePortePpl1.003" vitre="OpenVitrePortePpl1.003" numeroPorte={2}/>
            <PorteAnimation cadre="OpenCadreVitrePortePpl2.002" vitre="OpenVitrePortePpl2.002" numeroPorte={3}/>
        <PorteAnimation cadre="OpenCadreVitrePortePpl2.003" vitre="OpenVitrePortePpl2.003" numeroPorte={4}/>
      </View>
    </View>
  );
};

export default Home;
