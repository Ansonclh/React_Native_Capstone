import React, { useState } from "react";
import { TouchableOpacity, FlatList, Text, View } from "react-native";

import styles from "./Tabs.style";
import { COLORS, SIZES } from "../../constants";

function TabButton({ name, activeTab, onHandleSearchType, isDarkMode }) {
  return (
    <TouchableOpacity
      style={[styles.btn(name, activeTab), { backgroundColor: name === activeTab ? COLORS.primary : isDarkMode ? COLORS.secondary : "#F3F4F8" }]}
      onPress={onHandleSearchType}
    >
      <Text style={[styles.btnText(name, activeTab), { color: name === activeTab ? "#C3BFCC" : isDarkMode ? COLORS.darkText : "#AAA9B8" }]}>{name}</Text>
    </TouchableOpacity>
  );
}

const Tabs = ({ tabs, activeTab, setActiveTab, isDarkMode }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            isDarkMode={isDarkMode}
            onHandleSearchType={() => setActiveTab(item)}  //Changes the active tab when a button is pressed.
          />
        )}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}  //small gap between tab buttons
        keyExtractor={(item) => item}  //Sets the key for each item based on the tab name.
      />
    </View>
  );
};
export default Tabs;