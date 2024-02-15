import React from "react";
import { View, StyleSheet, Text } from "react-native";
const FinalStepScreen = ({ formData }) => {
  return (
    <View style={styles.slide}>
      <Text style={styles.title}>Final Review</Text>
      {Object.entries(formData).map(([key, value]) => (
        <Text key={key} style={styles.data}>
          {key}: {value}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    marginVertical: 20,
  },
  data: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#39448C",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default FinalStepScreen;
