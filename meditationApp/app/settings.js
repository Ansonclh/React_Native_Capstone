import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { COLORS, FONT, icons, SHADOWS, SIZES } from "../constants";
import {useRouter } from "expo-router";
import { ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn";
import { TouchableOpacity } from "react-native";

const Settings = () => {
    const [userDetails, setUserDetails] = useState(null);
    const router = useRouter();
    const settings = [
    {
        id: 1,
        title: "Settings",
        icon: "https://cdn-icons-png.flaticon.com/512/126/126472.png",
        target: "Mental Health",
        route: "ThemeChange",
    },
    {
        id: 2,
        title: "My Favourites",
        icon: "https://cdn-icons-png.flaticon.com/512/2932/2932360.png",
        target: "Mental Health",
        route: "Favourites",
    },
    {
        id: 3,
        title: "Daily Reminders",
        icon: "https://cdn-icons-png.flaticon.com/512/109/109613.png",
        target: "Mental Health",
        route: "DailyReminders",
    },
    ];
    useEffect(() => {
        loadUserDetails();
    }, []);
    const loadUserDetails = async () => {
    const user = await AsyncStorage.getItem("userDetails");
    console.log("user", user);
    setUserDetails(user);
    };

    const handleLogout = async () => {
        await AsyncStorage.removeItem("userDetails");
        router.push("/login");
    };
    return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <ScreenHeaderBtn />
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ flex: 1, padding: SIZES.medium }}>
                <View style={{ width: "100%" }} testID="userDetails">
                    {userDetails && (
                        <Text
                        style={{
                            fontFamily: FONT.regular,
                            fontSize: SIZES.large,
                            color: COLORS.secondary,
                        }}
                        >
                        Hello {JSON.parse(userDetails).userName}!
                        </Text>
                    )}
                    <Text
                        style={{
                        fontFamily: FONT.bold,
                        fontSize: SIZES.xLarge,
                        color: COLORS.primary,
                        marginTop: 2,
                        }}
                    >
                        Would you like to change any settings?
                    </Text>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
    );
}