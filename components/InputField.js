import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"; // Import Font Awesome icons

const InputField = ({ placeholder, value, onChangeText, iconName }) => {
  const renderIcon = () => {
    if (typeof iconName === "string") {
      return <View style={styles.iconContainer}><FontAwesome5 name={iconName} size={20} color="black" /></View>;
    } else {
      return <View style={styles.iconContainer}>{iconName}</View>;
    }
  };

  return (
    <View style={styles.inputContainer}>
      {iconName && renderIcon()}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  iconContainer: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
  },
});

export default InputField;