import React from 'react'
import { Button, View } from 'react-native'

type Props = {
    isOpen:boolean,
    ft_test(types:string):void
}
const BtnTeste = ({isOpen, ft_test}:Props) => {
  return (
    <View>
          <Button title={isOpen ? "Ferme porte" : "Ouvrir"} onPress={ isOpen ? ()=> ft_test("stop") : ()=>ft_test("test")}></Button>
    </View>
  )
}

export default BtnTeste