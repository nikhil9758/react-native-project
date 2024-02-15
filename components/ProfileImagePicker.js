import React from "react";
import { View, Text,TouchableOpacity, Image, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ProfileImagePicker = ({ image,setImage, pickImage }) => {
    const handlePickImage=async()=>{
        const pickedImage=await pickImage()
        if(pickedImage){
            setImage(pickedImage)
        }
    }
  return (
    <View style={styles.inputContainer}>
      <TouchableOpacity onPress={handlePickImage} style={styles.iconContainer}>
        {image && <Image source={{ uri: image }} style={styles.image} />}
        {!image && <AntDesign name="pluscircleo" size={39} color="grey" />}
      </TouchableOpacity>
      <Text style={styles.imageText}>{!image ? "Add" : "Change"} profile image</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  iconContainer: {
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  imageText: {
    fontSize: 16,
  },
});

export default ProfileImagePicker;
