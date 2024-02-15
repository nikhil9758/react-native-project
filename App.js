import React, { useState } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Platform,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { pickImage } from "./utils/ImagePickerHelper";
import PersonalInfoScreen from "./screens/PersonalInfoScreen";
import AdditionalInfoScreen from "./screens/AdditionalInfoScreen";
import FinalStepScreen from "./screens/FinalStepScreen";
import CustomCarousel from "./components/Carousel";
import StepperPagination from "./components/StepperPagination";
import CustomPagination from "./components/Pagination";
import HeaderIcon from "./assets/Vector-2.svg";
const slides = [
  { title: "Personal Info" },
  { title: "Additional Info" },
  { title: "Final Step" },
];

const App = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    experience: "",
    dateOfBirth: "",
    location: "",
    skills: "",
    gender: "",
  });

  const handleInputChange = (fieldName, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form data submitted:", formData);
    // Reset the form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      experience: "",
      dateOfBirth: "",
      location: "",
      skills: "",
      gender: "",
    });
  };

  const renderItem = ({ item, index }) => {
    switch (index) {
      case 0:
        return (
          <PersonalInfoScreen
            image={image}
            setImage={setImage}
            pickImage={pickImage}
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );
      case 1:
        return (
          <AdditionalInfoScreen
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );
      case 2:
        return (
          <FinalStepScreen
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );

      default:
        return null;
    }
  };

  return (
    <SafeAreaProvider style={{ height: 600 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          style={styles.container}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={1}
          >
            <ScrollView>
              <View style={{ backgroundColor: "#232E67", height: 160 }}>
                <View style={{ flex: 1, alignItems: "center", top: 10 }}>
                  <HeaderIcon width={65} height={75} />
                </View>
                <View style={{ position: "absolute", bottom: 0 }}>
                  <StepperPagination
                    activeSlide={activeSlide}
                    totalSlides={3}
                  />
                  <CustomPagination data={slides} activeSlide={activeSlide} />
                </View>
              </View>
              <CustomCarousel
                data={slides}
                renderItem={renderItem}
                activeSlide={activeSlide}
                setActiveSlide={setActiveSlide}
                onSubmit={handleSubmit}
              />
            </ScrollView>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 10,
    backgroundColor: "#F5FCFF",
  },
});

export default App;
