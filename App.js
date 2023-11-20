import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";

export default function App() {
  const obj = [
    {},
    { id: 1, name: "Stan", age: 45 },
    { id: 2, name: "Francine", age: 40 },
    { id: 3, name: "Hashley", age: 35 },
    { id: 4, name: "Sophie", age: 25 },
    { id: 5, name: "Natasha", age: 15 },
    { id: 6, name: "Ophélie", age: 28 },
  ];
  const [family, setFamily] = useState(obj);

  return (
    <View style={styles.wrapper}>
        {
        family.map(member => {
          return (
            <View key={member.id} style={styles.viewList}>
              <Text style={styles.text}>
                <Text style={styles.textBold}> Nom: </Text>
                {member.name}
              </Text>

              <Text style={styles.text}>
                <Text style={styles.textBold}> Age: </Text>
                {member.age}
              </Text>
            </View>
          );
        })}
      
    </View>
  );
}




const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
    viewList: {
      marginTop: 30,
      backgroundColor: "purple",
      padding: 19
    },
    text: {
      color: "#fff",
      fontSize: 20
    },
    textBold: {
      fontWeight: "Bold"
    },
  
});
