import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
    return (
        <View className="flex-1 items-center justify-center bg-slate-50 px-6">

            <View className="w-full max-w-sm bg-white p-8 rounded-3xl shadow-sm border border-slate-100">

                <Text className="text-4xl font-extrabold text-indigo-600 mb-2 text-center">
                    Welcome! 👋
                </Text>
                <Text className="text-base text-slate-500 mb-8 text-center leading-relaxed">
                    Ready to build your React Native app? You're in the right place.
                </Text>

                <View className="bg-indigo-50 p-4 rounded-2xl border border-indigo-100 mb-6">
                    <Text className="text-sm text-indigo-800 font-medium text-center">
                        Open <Text className="font-bold">app/index.tsx</Text> to start editing this screen.
                    </Text>
                </View>

                <TouchableOpacity
                    className="bg-indigo-600 py-4 rounded-xl active:bg-indigo-700"
                    activeOpacity={0.8}
                    onPress={() => router.navigate('/home')}
                >
                    <Text className="text-white font-bold text-center text-base">
                        Let's Get Started
                    </Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}