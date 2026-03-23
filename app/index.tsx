import { router, useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { Text, View } from 'react-native';

export default function Index() {
    const [mount, setMount] = useState(false);

    useFocusEffect(
        useCallback(() => {
            if (mount) {
                router.navigate('/form');
            }
            setMount(true);
        }, [mount])
    )

    return (
        <View className='flex-1 items-center justify-center'>
            <Text>Redirecting</Text>
        </View>
    )
}