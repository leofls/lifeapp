import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function ExplanationCard() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Através desse APP você vai consolidar 
                {"\n"}4 hábitos de áreas fundamentais:
            </Text>

            <View style={styles.explanationContainer}>
                <Image 
                    source={require("../../../assets/icons/educationIcon.png")}
                    style={styles.icon}
                />
                <Text style={styles.description}>
                    <Text style={styles.mind}>Mente: </Text>
                    Hábitos para melhorar sua inteligência
                </Text>
            </View>

            <View style={styles.explanationContainer}>
                <Image 
                    source={require("../../../assets/icons/Money.png")}
                    style={styles.icon}
                />
                <Text style={styles.description}>
                    <Text style={styles.money}>Dienheiro: </Text>
                    Hábitos para te ajudar com controle financeiro
                </Text>
            </View>

            <View style={styles.explanationContainer}>
                <Image 
                    source={require("../../../assets/icons/Body.png")}
                    style={styles.icon}
                />
                <Text style={styles.description}>
                    <Text style={styles.body}>Corpo: </Text>
                    Hábitos para te deixar {"\n"} mais saudável e forte.
                </Text>
            </View>

            <View style={styles.explanationContainer}>
                <Image 
                    source={require("../../../assets/icons/Fun.png")}
                    style={styles.icon}
                />
                <Text style={styles.description}>
                    <Text style={styles.fun}>Humor: </Text>
                    Hábitos para controlar stress {"\n"}e aumentar felicidade.
                </Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        width: 350,
        borderRadius: 25,
        padding: 30,
    },
    title: {
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        fontSize: 16,
    },
    explanationContainer: {
        flexDirection: "row",
        marginTop: 30,
    },
    icon: {
        width: 40,
        height: 40,
        marginRight: 5,
    },
    description:{
        color: "white",
    },
    mind: {
        color: "#90B7f3",
        fontWeight: "bold"
    },
    money: {
        color: "#B5BB65",
        fontWeight: "bold"
    },
    
    body: {
        color: "#FF0044",
        fontWeight: "bold"
    },
    
    fun: {
        color: "#FE7F23",
        fontWeight: "bold"
    },
    
});