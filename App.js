import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes";          
export default function App() {             return (
     <NavigationContainer>
      <Routes/>
     </NavigationContainer>
  )
 }
 
 /*
 passos para gerar o build do projeto:
 passo 1: npm install -g eas-cli
 passo 2: eas login(emanoelpi76@gmail.com, @Nel1307)
 passo 3: eas build --platform android
 depois responda as peguntas digitando Y, depois enter e depois digite Y. Apos isso vai demorar bastante tempo...
 assim que acabar vá ao arquivo eas.json dentro de build onde tem "preview" adicione mais uma flag e ficará assim:
 "preview" : {
   "distribution": "internal",
   "android": {
     "buildType": "apk"
   }
 }
 depois que fizer isso execute novamente o comando eas build --platform android
 */