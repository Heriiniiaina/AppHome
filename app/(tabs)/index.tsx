import AuthButtons from "@/pages/AuthBtn";
import FaceAuthScreen from "@/pages/FaceId";
import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreenWrapper() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
 

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
         {  isAuthenticated ?  <FaceAuthScreen /> : <AuthButtons isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/> }  
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


