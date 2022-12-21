import React from "react";
import { Image, Text, View } from "react-native";

export default function ExplanationCard() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Através desse APP você vai consolidar {"\n"} 
                4 hábitos de áreas fundamentais:
            </Text>


            <View style={styles.explatanationContainer}>
                <Image 
                    source={require("../../../assets/icons/educationIcon.png")}
                    style={styles.icon}
                />
                <Text style={styles.description}>
                    <Text style={styles.description}>
                    </Text>
                </Text>
            </View>




        </View>
    );
}