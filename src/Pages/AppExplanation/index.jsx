import React from "react";
import { StyleSheet, ScrollView, Text, View, } from "react-native";
import { useNavigation } from "@react-navigation/native";

import DefaultButton from "../../Components/Common/DefaultButton";
import ExplanationCard from "../../Components/Explanation/ExplanationCard";

export default function AppExplanation() {
    const navigation = useNavigation();

    function handleNavHome() {
        navigation.navigate("Home")
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ alignItems: "center"}}>
                    <Text style={styles.title}>
                        Antes, deixa {"\n"} eu te explicar...
                    </Text>
                    <ExplanationCard />
                    <Text style={styles.desctiptionCta}>
                        Pronto para subir de nivel na vida?
                    </Text>
                    <Text style={styles.desctiption}>
                        Na proxima tela você vai poder escolher seus {"\n"}
                        4 habitos de forma individual.
                    </Text>
                    <DefaultButton
                        buttonText={"Continuar"}
                        handlePress={handleNavHome}
                        width={250}
                        height={50}
                    />

                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "rgba(21,21,21,0.98)",
    },
    title:{
        fontSize: 30,
        fontWeight: "bold",
        color:"#FFF",
        textAlign: "center",
        marginVertical: 40,
    },
    desctiptionCta: {
        color: "#fff",
        fontWeight: "bold",
        fontSize:16,
        marginTop: 20,
        marginBottom: 10,
    },
    desctiption: {
        color:"#fff",
        textAlign: "center",
        marginBottom: 30,
    },


})