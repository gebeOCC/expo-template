import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

export default function Profile() {

    // TODO: 1. Create a state object to store the user data
    // Fields: email, first_name, last_name, middle_name, phone, address

    // TODO: 2. Create a function to fetch user data from backend
    const fetchUserData = async () => {
        // TODO: Inside this function:
        // - Retrieve token from SecureStore
        //   Example: const token = await SecureStore.getItemAsync('userToken')
        // - Make a GET request to /api/user with Authorization header
        //   Example: headers: { Authorization: `Bearer ${token}` }
        // - Store the response in the state object
        // - Handle errors if token is missing or invalid
    }

    // TODO: 3. Use useEffect to call fetchUserData when the component mounts
    useEffect(() => {
        // fetchUserData()
    }, [])

    return (
        <View>
            <Text>profile</Text>

            {/* TODO: 4. Display the user data stored in state */}
            {/* Example: 
                <Text>Email: {user.email}</Text>
                <Text>First Name: {user.first_name}</Text>
                <Text>Last Name: {user.last_name}</Text>
                <Text>Phone: {user.phone}</Text>
            */}

            {/* TODO: 5. Optional: show a loading message while fetching data */}
        </View>
    )
}