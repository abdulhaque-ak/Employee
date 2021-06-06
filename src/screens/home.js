import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, Image, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home(props) {
    const [data, setData] = useState()
    const [tempData, setTempdata] = useState()
    const getData = async () => {
        let empData = await AsyncStorage.getItem('datas')
        setData(JSON.parse(empData))
    }
    useEffect(() => {
        getData()
    }, [])

    const search = (text) => {
        const formatted = text.toLowerCase()
        const tempDatas = data
        const result = tempDatas.filter((item) => {
            if (item.name.toLowerCase().match(formatted)) {
                return true
            } else if (item.email.toLowerCase().match(formatted)) {
                return true
            }
            return false
        })
        setTempdata(result)
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.headView}>
                <Text style={styles.headText}>Employees</Text>
            </View>
            <View style={styles.headView2}>
                <TextInput style={styles.inputText}
                    placeholder="Search Name / Email"
                    onChangeText={search}
                ></TextInput>
            </View>
            <View style={styles.flatView}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => tempData && tempData?.length == 0 ? (<Text style={{ textAlign: 'center', marginVertical: 50, fontFamily: 'bold' }}>No matches found!</Text>) : null}
                    data={tempData == undefined ? data : tempData}
                    renderItem={(item) => {
                        let id = item.item.id
                        return (
                            <TouchableOpacity
                                onPress={() => props.navigation.navigate('EmployeeDetail', { data: item.item })}
                                style={styles.flatView2}>
                                <Image style={styles.image} source={item.item.profile_image ? { uri: item.item.profile_image } : require('../../assets/images/noimg.png')} />
                                <View style={styles.textView}>
                                    <Text style={styles.name}>{item.item.name ? item.item.name : 'No name'}</Text>
                                    <Text style={styles.companyName}>{item?.item?.company?.name ? item?.item?.company?.name : 'Freelancer'}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headView: {
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 5
    },
    headView2: {
        alignItems: 'center',
    },
    inputText: {
        width: Dimensions.get('window').width - 40,
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor: '#ccccb3',
        paddingLeft: 20
    },
    headText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    flatView: {
        flex: 1,
        alignItems: 'center',
    },
    flatView2: {
        backgroundColor: '#ccccb3',
        height: 130,
        width: Dimensions.get('window').width - 40,
        borderRadius: 10,
        marginBottom: 5,
        alignItems: 'center',
        flexDirection: 'row'
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 10,
        marginLeft: 15
    },
    textView: {
        marginLeft: 15
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    companyName: {
        fontSize: 20
    }
})