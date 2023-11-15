import React,{ useState} from "react";
import { StyleSheet, Text, View, Button } from 'react-native';




  export default function App() {

const obj = {
  name: "spiderman",
  age: 30
}
    const [info, setInfos] = useState(obj)

const handlePress = () => {
  setInfos({
    name: "catwoman",
  age: 14
  })
}

    return (
      <View style={styles.wrapper}>
      <Text style={ styles.textTwo}>Name: { info.name }</Text>
      <Text style={ styles.textTwo}>Age: { info.age }</Text>

<Button
title="Cliquez ici" onPress={handlePress}
/>
      </View>

    );
  }

  

const styles = StyleSheet.create({
 wrapper: { marginTop: 50, fontSize: 30},
 viewOne:{ backgroundColor:"green", fontWeight: "bold"},
 textTwo: { backgroundColor: "yellow", fontSize:50},
 textOne: { fontFamily: "Cochin"}
});
