// Exercice 1
import React, { useState } from "react";
import { View,
  Text,
  StyleSheet,
  ScrollView,
   } from "react-native";

export default function App() {

  

  const obj = [
    {id: "1", name: "Stan", age: 45},
    {id: "2", name: "Francine", age: 45},
    {id: "3", name: "hayley", age: 18},
    {id: "4", name: "Steve", age: 14},
    {id: "5", name: "Roger", age: 1020},
    {id: "6", name: "Klaus", age: 30},
  ]


  const [family, setFamily] = useState(obj);
  <ScrollView>

  return (
    <View style={styles.container}>
      {
        family.map(member => {

return (
  <View key={member.id} style={styles.list}>

    <Text style={styles.textList}>Name: {member.name} | Age: {member.age}</Text>
    </View>
)
        })

      }
    </View>
    
  );
  </ScrollView>
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
  },
  list: {
    backgroundColor: "aqua",
    justifyContent: "center",
    alignItems:"center",
margin: 10

  },
  textList: {
color: "#000",
padding:12,
fontSize: 20
  }
});
