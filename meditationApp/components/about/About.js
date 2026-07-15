import { View, Text } from "react-native";

import styles from "./About.style";
import { COLORS } from "../../constants";

const About = ({ info, title, isDarkMode }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.headText, { color: isDarkMode ? COLORS.darkText : COLORS.lightText }]}>About {title}:</Text>

      <View style={styles.contentBox}>
        <Text style={[styles.contextText, { color: isDarkMode ? COLORS.darkText : COLORS.gray }]}>{info}</Text>
      </View>
    </View>
  );
};

export default About;