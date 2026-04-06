import React from 'react'
import { Text, View } from 'react-native'

export default function Login() {

    // TODO: 1. Create a useState object to store login fields:
    // - email
    // - password

    // TODO: 2. Create a function to handle login
    const handleLogin = async () => {
        // TODO: Inside this function:
        // - Send a POST request to /api/login endpoint
        // - Use the state object as payload
        // - Handle backend response
        //   - On success:
        //       - Receive token and user data
        //       - Store the token securely using SecureStore
        //         Example: await SecureStore.setItemAsync('userToken', token)
    }

    return (
        <View>
            <Text>login</Text>

            {/* TODO: 3. Add TextInput components for email and password */}

            {/* TODO: 4. Add a Button to submit the form */}
        </View>
    )
}