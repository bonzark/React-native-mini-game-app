import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Colors from '../../constance/colors'

const Card = ({children}) => {
  return (
    <View style={styles.inputContainer}>{children}</View>
  )
}

export default Card
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({  inputContainer: {
    // flex: 1,
    padding: 16,
    marginTop: deviceWidth < 450 ? 18 : 36,
    marginHorizontal: 24,
    backgroundColor: Colors.primary500,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    // for shadow in android device
    elevation: 4,
    // for shadow in ios device
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },})