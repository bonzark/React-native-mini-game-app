import React from 'react'
import { StyleSheet, Text ,Platform} from 'react-native';

const Title = ({children}) => {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

export default Title;

const styles = StyleSheet.create({
    title: {
      fontSize: 18,
      fontWeight: "bold",
      color: "white",
      textAlign: "center",
      // both things are same 
      // borderWidth: Platform.OS === "android" ? 2:0,
      // borderWidth: Platform.select({ios: 0 , android:2}),
      borderWidth: 2,
      borderColor: "white",
      padding: 12,
      width:300,
      maxWidth:"80%"
    },
  });
  