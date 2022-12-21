import React from "react";
import  {View, ScrollView, Text, Image, StyleSheet} from 'react-native';
import { useNavigation } from "@react-navigation/native"

import DefaultButton from "../../Components/Common/DefaultButton";
import LifeStatus from "../../Components/Common/LifeStatus";

export default function Start() {
    const handleNavAppExplanation = () => {
        console.log("testando clique");
    }

    return (
        <View style={styles.container}>
            <ScrollView showVerticalScrollIndicator={false}>
                <View style={{ alignItems: "center" }}>
                    <Image source={require("../../assets/icons/logo3.png")}
                        style={styles.logo}
                    />
                    
                    <LifeStatus />

                    <Text style={styles.description}>
                        Vamos Transformar sua vida {"\n"} em jogo. 
                        Buscando sempre {"\n"} o melhor nivel.
                    </Text>

                    <DefaultButton
                        buttonText={"Continuar"}
                        handlePress={handleNavAppExplanation}
                        width={250}
                        height={50}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "rgba(21,21,21,0.98)",
    },

    logo: {
        width: 300,
        height: 60,
        marginTop: 60,
        marginBottom: 20,
    },

    description: {
        color: "#ffffff",
        fontSize: 20,
        textAlign: "center",
        marginVertical: 60,
    }
})