import { useState, useEffect } from "react"
import { ScrollView, StyleSheet, Text } from "react-native"
import RestCard from "./RestCard"

export default function RestList() {
    const [restaurants, setRestaurants] = useState()

    useEffect(() => {
        fetch(`https://api.bocacode.com/api/restaurants`)
        .then(res => res.json())
        .then(setRestaurants)
        .catch(alert)
    }, [])

    return(
        <>
            <ScrollView style={styles.scrollingList}>
                {!restaurants
                 ? <Text styles={styles.loadingText}>Loading...</Text>
                 : restaurants.map(restaurant => (
                    <RestCard key={restaurant._id} restaurant={restaurant} />
                 ))
                }
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    loadingText: {
        padding: 8,
        fontSize: 24,
        color: '#eee',
    },
    scrollingList: {
        // borderColor: 'pink',
        // borderWidth: 2,
        // borderStyle: 'solid',
        width: '90%',
        marginTop: 16,
    },
})