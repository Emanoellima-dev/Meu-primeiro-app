import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, StatusBar } from 'react-native';
import Slider from "@react-native-community/slider";
import { ModalPassword } from "../../components/modal"

const charset="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUV01234567i9"

export function Home() {
  
 const [size, setSize]= useState(10)
 const [passwordValue, setPasswordValue]=useState("");
 const [modalVisible, setModalVisible]= useState(false)
 
function generatePassword() {
  let password = "";
  
  for (let i=0, n=charset.length; i<size; i++) {
    password+= charset.charAt(Math.floor(Math.random() * n));
  }
  
  setPasswordValue(password);
  setModalVisible(true)
}

  return (
    <View style={styles.container}>
    <StatusBar style="light-content" backgroundColor="#392de9" />
      <Image 
       source={require("../../assets/logo.png")}
       style={styles.logo}
      />
      
      <Text style={styles.title}>{size} caracteres</Text>
      
      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor="red"
          minimumTrackTintColor="black"
          thumbTintColor="#392de9"
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0))}
        />
      </View>
      
      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>gerar senha</Text>
      </TouchableOpacity>
      
      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        
        <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)}/>
        
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBotom: 60
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgorundColor: "white",
    borderRadius: 8,
    padding: 6,
  },
  button: {
    backgroundColor: "#392de9",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 18,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  }
});
