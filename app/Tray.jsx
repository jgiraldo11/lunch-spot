import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from "react-native";

export default function Tray({ setSelectedRestaurant }) {

    const choose = () => {
        const chosen = math.random()
        setSelectedRestaurant(chosen)
    }

    return (
        <View style={styles.tray}>
         <TouchableOpacity style={styles.button}> 
            <Text style={styles.buttonText}>Shuffle</Text>
         </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create ({
    button: {
        backgroundColor: '#9370db',
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 4,
        borderStyle: 'solid',
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