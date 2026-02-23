import React from 'react';
import { Text, View } from 'react-native';

export default function Home() {
    return (
        <View className="flex-1 bg-slate-50 p-8 pt-24">

            <View className="mb-12">
                <Text className="text-indigo-600 font-bold tracking-widest text-xs uppercase">
                    Welcome Student
                </Text>
                <Text className="text-4xl font-black text-slate-900 mt-1">
                    Home
                </Text>
            </View>

            <View className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">

                <View className="mb-6 border-b border-slate-50 pb-4">
                    <Text className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">
                        Instructor
                    </Text>
                    <Text className="text-xl font-semibold text-slate-800">
                        Barry Gebe
                    </Text>
                </View>

                <View className="mb-6 border-b border-slate-50 pb-4">
                    <Text className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">
                        Classroom
                    </Text>
                    <Text className="text-xl font-semibold text-slate-800">
                        CL1
                    </Text>
                </View>

                <View>
                    <Text className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">
                        Current Semester
                    </Text>
                    <Text className="text-xl font-bold text-indigo-600">
                        2025-2026 Second
                    </Text>
                </View>

            </View>
            
            <View className="mt-auto border-t border-slate-100 pt-6">
                <Text className="text-slate-300 text-sm italic">
                    Mobile Application Development Template
                </Text>
            </View>

        </View>
    );
}