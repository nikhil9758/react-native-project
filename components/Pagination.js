import React from "react";
import {Pagination} from "react-native-snap-carousel";
import { View, StyleSheet } from "react-native";

const CustomPagination = ({ data, activeSlide }) => {
    return (
        <View>
            <View style={styles.paginationContainer}>
            <Pagination
              dotsLength={data.length}
              activeDotIndex={activeSlide}
              containerStyle={styles.paginationContainer}
              dotStyle={styles.paginationDot}
              inactiveDotStyle={styles.paginationDot}
              inactiveDotOpacity={0.4}
              inactiveDotScale={1}
            />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    width: "97%",
    alignItems: "center",
  },
  paginationDot: {
    width: 100,
    height: 5,
    borderRadius: 7.5,
    backgroundColor: "#5063EE",
  },
});

export default CustomPagination;
