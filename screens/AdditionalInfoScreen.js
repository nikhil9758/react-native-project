import React from "react";
import { View, StyleSheet, Text } from "react-native";
import InputField from "../components/InputField";

const AdditionalInfoScreen = ({ formData, handleInputChange }) => {
  return (
    <View style={styles.slide}>
      <Text style={styles.title}>Additional Info</Text>
      <InputField
        placeholder="Date of Birth"
        value={formData.dateOfBirth}
        onChangeText={(text) => handleInputChange("dateOfBirth", text)}
        iconName="calendar"
      />
      <InputField
        placeholder="Location"
        value={formData.location}
        onChangeText={(text) => handleInputChange("location", text)}
        iconName="map-marker"
      />
      <InputField
        placeholder="Skills"
        value={formData.skills}
        onChangeText={(text) => handleInputChange("skills", text)}
        iconName="star"
      />
      <InputField
        placeholder="Gender"
        value={formData.gender}
        onChangeText={(text) => handleInputChange("gender", text)}
        iconName="venus-mars"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 5,
    width: "100%",
  },
  title: {
    fontSize: 30,
    marginVertical:20
  }
});

export default AdditionalInfoScreen;
