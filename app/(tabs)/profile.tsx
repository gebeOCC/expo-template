import React from 'react'
import { Text, View } from 'react-native'

export default function Profile() {
    return (
        <View className="flex-1 bg-slate-50 p-8 pt-24">

            <View className="items-center mb-10">
                <View className="w-24 h-24 bg-indigo-600 rounded-full items-center justify-center border-4 border-white shadow-sm mb-4">
                    <Text className="text-white text-3xl font-black">ST</Text>
                </View>

                <Text className="text-2xl font-black text-slate-900">Student</Text>
                <Text className="text-slate-400 text-sm font-medium">Community College</Text>
            </View>

            <View className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">

                <View className="mb-6 border-b border-slate-50 pb-4">
                    <Text className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">
                        Department
                    </Text>
                    <Text className="text-xl font-bold text-slate-800">
                        College of Information Technology
                    </Text>
                </View>

                <View className="mb-6 border-b border-slate-50 pb-4">
                    <Text className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">
                        School
                    </Text>
                    <Text className="text-lg font-semibold text-slate-800">
                        Opol Community College
                    </Text>
                </View>

                <View>

                    <Text className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">
                        Enrollment Status
                    </Text>
                    <View className="bg-green-50 self-start px-3 py-1 rounded-full border border-green-100">
                        <Text className="text-green-600 text-sm font-bold uppercase">
                            Enrolled
                        </Text>
                    </View>
                </View>

            </View>

            <View className="mt-auto border-t border-slate-100 pt-6">
                <Text className="text-slate-300 text-sm italic">
                    Mobile Application Development Template
                </Text>
            </View>

        </View>
    )
}