import React from 'react'
import { Button, View } from 'react-native'

type Props = {
    isOpen:boolean,
    ft_test(types:string, isOpen:boolean):void,
    numeroPorte:number
}
const BtnTeste = ({isOpen, ft_test, numeroPorte}:Props) => {
  return (
    <View>
          <Button title={isOpen ? `Ferme porte numero ${numeroPorte}` : `ouvrir porte numero ${numeroPorte}`} onPress={ isOpen ? ()=> ft_test("stop", isOpen) : ()=>ft_test("test", isOpen)}></Button>
    </View>
  )
}

export default BtnTeste