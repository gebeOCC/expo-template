import React from 'react'
import { Text, View } from 'react-native'

export default function Register() {

    // TODO: 1. Create a useState object to store all input fields:
    // - email, password, password_confirmation, first_name, last_name
    // - middle_name, phone, address

    // TODO: 2. Create a function to handle registration
    const handleRegister = () => {
        // TODO: Inside this function:
        // - Send a POST request to /api/register endpoint
        // - Use the state object as payload
        // - Ensure password_confirmation matches password
    }

    return (
        <View>
            <Text>register</Text>

            {/* TODO: 3. Add TextInput components for each field */}

            {/* TODO: 4. Add a Button to submit the form */}
        </View>
    )
}