import axios from 'axios';
import React, { useState } from 'react';
import { View } from 'react-native';
import BtnTeste from './BtnTeste';

type Props = {
    cadre:string,
    vitre:string,
    numeroPorte:number
}
const PorteAnimation = ({cadre,vitre,numeroPorte}:Props) => {
     const serveur = "http://192.168.42.238:8000";
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const ft_test = async (name:string, isOpen?:boolean) => {
    try {
    //   await axios.post(`${serveur}/${name}/OpenCadreVitrePortePpl1.002`, {vitre:"OpenVitrePortePpl1.002", cadre:"OpenCadreVitrePortePpl1.002"});
     await axios.post(`${serveur}/${name}/${cadre}`, {vitre:vitre, cadre:cadre});
     setIsOpen(!isOpen)
      console.log("test envoye");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={{  width:200, height:200, padding:10} }>
        {/* <Button title="Ferme forte" onPress={()=>ft_test("test")}></Button>
        <Button title="Allume lampe" onPress={()=>ft_test("stop")}></Button> */}
        <BtnTeste ft_test={ft_test} isOpen={isOpen} numeroPorte={numeroPorte}/>
      </View>
  )
}

export default PorteAnimation