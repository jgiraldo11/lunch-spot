import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from "react-native";

export default function Tray({ setSelectRestaurant }) {

    const choose = () => {
        const chosen = Math.random()
        setSelectRestaurant(chosen)
    }

    const clear = () => {
        setSelectRestaurant(0)
    }

    return (
        <View style={styles.tray}>
            <View style={styles.buttonList}>
                <TouchableOpacity onPress={choose} style={styles.button}> 
                    <Text style={styles.buttonText}>Shuffle Now 🎲</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={clear} style={[styles.button, styles.resetButton]}>
                    <Text style={styles.resetButtonText}>Reset</Text>
                </TouchableOpacity>
            </View >
        </View >
    )
}

const styles = StyleSheet.create ({
    buttonList: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    button: {
        backgroundColor: '#ed714d',
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 16,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#f79477',
    },

    resetButton: {
        backgroundColor: '#f4f5f6',
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 16,
        borderWidth: 1,
        borderStyle:'solid',
        borderColor: '#f79477',
    },

    resetButtonText: {
        color: '#777',
        fontSize: 20,
        fontWeight: 800,
    },

    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 800,
    },

    tray: {
        width: "100%",
        backgroundColor: "#e9eeff",
        height: 120,
        paddingTop: 30,
        paddingBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -10,
        },
        shadowOpacity: 0.11,
        shadowRadius: 12.51,
        elevation: 15, 
    }
})