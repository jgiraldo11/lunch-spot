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
                    <Text style={styles.buttonText}>Shuffle</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={clear} style={styles.resetButton}>
                    <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>
            </View >
        </View >
    )
}

const styles = StyleSheet.create ({
    buttonList: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    button: {
        backgroundColor: '#9370db',
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 4,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
    },

    resetButton: {
        backgroundColor: 'grey',
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 4,
        borderStyle:'solid',
        borderWidth: 1,
        borderColor: 'black',

    },

    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 800,

    },

    tray: {
        width: "100%",
        height: 70,
        backgroundColor: "#e9eeff",
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
    }
})