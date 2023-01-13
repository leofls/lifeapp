import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    Alert
} from 'react-native'

export default function HabitPage() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView >
                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity 
                        style={styles.backPageBtn} 
                        onPress={() => navigation.goBack()}
                    >
                        <Image 
                            source={require("../../assets/icons/arrowBack.png")}
                            style={styles.arrowBack}
                        ></Image>
                    </TouchableOpacity>
                    <View style={styles.mainContent}></View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 40,
        height: 40,
        margin: 25,
    },
    arrowBack: {
        width: 40,
        height: 40,
    },
    mainContent: {
        width: 250,
        alignSelf:"center"
    }

});