import AuthButtons from "@/pages/AuthBtn";
import Home from "@/pages/Home";
import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreenWrapper() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
 

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
         {  isAuthenticated ?  <Home /> : <AuthButtons isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/> }  
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


