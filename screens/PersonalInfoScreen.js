import React from "react";
import { View, Text, StyleSheet } from "react-native";
import InputField from "../components/InputField";
import ProfileImagePicker from "../components/ProfileImagePicker";
import UserIcon from "../assets/user.svg";
import EmailIcon from "../assets/email-_2_.svg";
import ContactIcon from "../assets/Vector.svg";
import CountryIcon from "../assets/world-1.svg";
import CityIcon from "../assets/glyph.svg";
import ExperienceIcon from "../assets/certificate-1.svg";
const PersonalInfoScreen = ({
  image,
  setImage,
  pickImage,
  formData,
  handleInputChange,
}) => {
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    return /^\d{10}$/.test(phone);
  };

  return (
    <View style={styles.slide}>
      <Text style={styles.title}>Personal Info</Text>
      <ProfileImagePicker
        image={image}
        setImage={setImage}
        pickImage={pickImage}
      />
      <InputField
        placeholder="First Name"
        value={formData.firstName}
        onChangeText={(text) => handleInputChange("firstName", text)}
        iconName={<UserIcon />}
      />
      <InputField
        placeholder="Last Name"
        value={formData.lastName}
        onChangeText={(text) => handleInputChange("lastName", text)}
        iconName={<UserIcon />}
      />
      <InputField
        placeholder="Email"
        value={formData.email}
        onChangeText={(text) => handleInputChange("email", text)}
        iconName={<EmailIcon />}
        validationError={
          formData.email !== "" && !validateEmail(formData.email)
        }
      />
      {formData.email !== "" && !validateEmail(formData.email) && (
        <Text style={styles.validationError}>Invalid email address</Text>
      )}
      <InputField
        placeholder="Phone"
        value={formData.phone}
        onChangeText={(text) => handleInputChange("phone", text)}
        iconName={<ContactIcon />}
        validationError={
          formData.phone !== "" && !validatePhone(formData.phone)
        }
      />
      {formData.phone !== "" && !validatePhone(formData.phone) && (
        <Text style={styles.validationError}>
          Phone number must be 10 digits
        </Text>
      )}
      <InputField
        placeholder="coutry"
        value={formData.country}
        onChangeText={(text) => handleInputChange("country", text)}
        iconName={<CountryIcon />}
      />
      <InputField
        placeholder="city"
        value={formData.city}
        onChangeText={(text) => handleInputChange("city", text)}
        iconName={<CityIcon />}
      />
      <InputField
        placeholder="experience"
        value={formData.experience}
        onChangeText={(text) => handleInputChange("experience", text)}
        iconName={<ExperienceIcon />}
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
  validationError: {
    color: "red",
    marginTop: 5,
  },
  title: {
    fontSize: 30,
    marginVertical: 20,
  },
});

export default PersonalInfoScreen;
