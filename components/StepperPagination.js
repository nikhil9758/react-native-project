import React from "react";
import { Text } from "react-native";

const StepperPagination = ({ activeSlide, totalSlides }) => {
  return <Text style={{ color: "white", paddingLeft: 20 }}>Step {activeSlide + 1}/{totalSlides}</Text>;
};

export default StepperPagination;
