import FaceAuthScreen from '@/pages/FaceId';
import { useSelector } from 'react-redux';

const auth = () => {
  
const nom = useSelector((state: any) => state.auth.nom);

console.log(nom)
  return (
 
   
         <FaceAuthScreen/>
    
 
  )
}

export default auth