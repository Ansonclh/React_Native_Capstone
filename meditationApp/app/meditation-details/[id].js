import { Stack, useGlobalSearchParams, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  Share,
  Alert,
  StyleSheet,
} from "react-native";

import {
  MeditationTopDisplay,
  About,
  Footer,
  Tabs,
} from "../../components";
import ScreenHeaderBtn from '../../components/ScreenHeaderBtn';
import { COLORS, icons, SIZES } from "../../constants";
import useFetch from "../../hook/useFetch";
import { useTheme } from "../../context/ThemeProvider";

const tabs = ["About", "Instructions"];

const MeditationDetails = () => {
  const params = useGlobalSearchParams();
  const id = params.id;
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const { data, isLoading, error, refetch } = useFetch("search", {
    query: id,
  });
  const meditationItem = useFetch().getItemById(parseInt(id, 10));  //turn string to number with base 10

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
    }, []);

    const displayTabContent = () => {
        if (activeTab === "About") {
            return (
            <About
                title={meditationItem.title}
                info={meditationItem.description ?? "No data provided"}
                isDarkMode={isDarkMode}
            />
            );
        } else if (activeTab === "Instructions") {
            return (
            <View style={styles.specificsContainer}>
                <Text style={[styles.specificsTitle, { color: isDarkMode ? COLORS.darkText : COLORS.lightText }]}>Instructions:</Text>
                <View style={styles.pointsContainer}>
                    {/* ?? is nullish coalescing operator, returns the left operand if it is not null or undefined, otherwise returns the right operand */}
                    {(meditationItem.instructions ?? ["N/A"]).map((item, index) => (
                        <View style={styles.pointWrapper} key={index}>
                            <View style={[styles.pointDot, { backgroundColor: isDarkMode ? COLORS.darkText : COLORS.primary }]} />
                            <Text style={[styles.pointText, { color: isDarkMode ? COLORS.darkText : COLORS.gray }]}>{item}</Text>
                        </View>
                    ))}
                </View>
            </View>
            );
        }
        return null;
    };
    
    const onShare = async () => {
        try {
            const result = await Share.share({
            message: `Check out this meditation: ${meditationItem.title} (${meditationItem.duration})`,
            });
            if (result.action === Share.dismissedAction) {
            // Share dismissed
            }
        } catch (error) {
            Alert.alert(error.message);
        }
    };


return (
  <SafeAreaView style={{ flex: 1, backgroundColor: isDarkMode ? COLORS.darkBackground : COLORS.lightWhite }}>
    <ScreenHeaderBtn detailPage={true} handleShare={onShare} />

    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {isLoading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : error ? (
        <Text style={{ color: isDarkMode ? COLORS.darkText : COLORS.lightText }}>Something went wrong</Text>
      ) : !meditationItem || meditationItem.length === 0 ? (
        <Text style={{ color: isDarkMode ? COLORS.darkText : COLORS.lightText }}>No data available</Text>
      ) : (
        <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
          <MeditationTopDisplay
            meditationImage={meditationItem.image}
            meditationTitle={meditationItem.title}
            duration={meditationItem.duration}
            target={meditationItem.target}
            isDarkMode={isDarkMode}
          />

          <Tabs
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            isDarkMode={isDarkMode}
          />

          {displayTabContent()}
        </View>
      )}
    </ScrollView>

    <Footer data={meditationItem} isDarkMode={isDarkMode} />
  </SafeAreaView>
);
}
export default MeditationDetails;


const styles = StyleSheet.create({
  specificsContainer: {
    padding: SIZES.medium,
  },
  specificsTitle: {
    fontSize: SIZES.large,
    fontWeight: "bold",
    marginBottom: SIZES.small,
  },
  pointsContainer: {
    marginTop: SIZES.small,
  },
  pointWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SIZES.small / 2,
  },
  pointDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.primary,
    marginRight: SIZES.small,
  },
  pointText: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
});