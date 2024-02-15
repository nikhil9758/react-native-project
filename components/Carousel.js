import React, { useRef } from "react";
import Carousel from "react-native-snap-carousel";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const CustomCarousel = ({ data, renderItem, activeSlide, setActiveSlide, onSubmit }) => {
  const carouselRef = useRef(null);

  const goToNextSlide = () => {
    if (carouselRef.current) {
      const nextSlide = activeSlide === data.length - 1 ? 0 : activeSlide + 1;
      carouselRef.current.snapToItem(nextSlide);
      setActiveSlide(nextSlide);
    }
  };

  const renderButton = () => {
    if (activeSlide === data.length - 1) {
      return (
        <TouchableOpacity onPress={onSubmit}>
          <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={goToNextSlide}>
          <Text style={styles.button}>Next</Text>
        </TouchableOpacity>
      );
    }
  };

  return (
    <View>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        sliderWidth={400}
        itemWidth={350}
        onSnapToItem={(index) => setActiveSlide(index)}
        swipeEnabled={false}
      />
      <View style={styles.buttonContainer}>{renderButton()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    backgroundColor: "#39448C",
  },
  button: {
    marginVertical: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    width: "100%",
    textAlign: "center",
  },
});

export default CustomCarousel;
