import React from "react";
import { Image, StyleSheet, View } from "react-native";

import {ProgressBar} from "react-native-paper";

export default function StatusBar() {
    
    return (
        <View style={styles.container}>
            <View style={styles.StatusBarContainer}>
                <Image 
                    source={require("../../../assets/icons/educationIcon.png")}
                    style={styles.icon}
                />
                <ProgressBar 
                    progress={1}
                    color={"#90B7F3"}
                    style={styles.progress}
                />
            </View>
            <View style={styles.StatusBarContainer}>
                <Image 
                    source={require("../../../assets/icons/Money.png")}
                    style={styles.icon}
                />
                <ProgressBar 
                    progress={0}
                    color={"#B5BB65"}
                    style={styles.progress}
                />
            </View>
            <View style={styles.StatusBarContainer}>
                <Image 
                    source={require("../../../assets/icons/Body.png")}
                    style={styles.icon}
                />
                <ProgressBar 
                    progress={0}
                    color={"#FF0044"}
                    style={styles.progress}
                />
            </View>
            <View style={styles.StatusBarContainer}>
                <Image 
                    source={require("../../../assets/icons/Fun.png")}
                    style={styles.icon}
                />
                <ProgressBar 
                    progress={0}
                    color={"#FE7F23"}
                    style={styles.progress}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#151515",
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    StatusBarContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 6
    },
    progress: {
        borderRadius: 10,
        width: 250,
        height: 8,
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 5,
    },
})