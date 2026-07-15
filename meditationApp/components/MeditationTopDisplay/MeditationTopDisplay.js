import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./MeditationTopDisplay.style";
import { COLORS } from "../../constants";

const MeditationTopDisplay = ({ meditationImage, meditationTitle, duration, target, isDarkMode }) => {


return (
  <View style={styles.container}>
    <View style={styles.logoBox}>
      <Image
        source={{
          uri: meditationImage,
        }}
        resizeMode="cover"
        style={styles.logoImage}
      />
    </View>

    <View style={styles.meditationTitleBox}>
      <Text style={[styles.meditationTitle, { color: isDarkMode ? COLORS.darkText : COLORS.primary }]}>{meditationTitle}</Text>
    </View>

    <View style={styles.meditationInfoBox}>
      <Text style={[styles.meditationName, { color: isDarkMode ? COLORS.darkText : COLORS.primary }]}>{target} / </Text>
      <View style={styles.durationBox}>
        <Image
          source={"https://cdn-icons-png.flaticon.com/512/109/109613.png"}
          resizeMode="cover"
          style={styles.durationImage}
        />

        <Text style={styles.durationName}>{duration}</Text>
      </View>
    </View>
  </View>
);

}

export default MeditationTopDisplay;