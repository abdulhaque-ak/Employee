import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EmployeeDetail(props) {
    let empDatas = props.route.params.data
    console.log(empDatas)
    const [data, setData] = useState()
    const getData = async () => {
        let empData = await AsyncStorage.getItem('datas')
        setData(JSON.parse(empData))
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.headView}>
                <Text style={styles.headText}>Employee Details</Text>
            </View>
            <View style={styles.flatView}>
                <View style={styles.flatView2}>
                    <View style={styles.topView}>
                        <Image style={styles.image} source={empDatas.profile_image ? { uri: empDatas.profile_image } : require('../../assets/images/noimg.png')} />
                        <View style={styles.info}>
                            <Text>Name: <Text style={styles.name} numberOfLines={1}>{empDatas.name}</Text> </Text>
                            <Text>User Name: <Text style={styles.usrname} numberOfLines={1}>{empDatas.username}</Text> </Text>
                            <Text>Email: <Text style={styles.email} numberOfLines={1}>{empDatas.email}</Text> </Text>
                        </View>
                    </View>
                    <View style={styles.adSection}>
                        <View style={styles.adView}>
                            <Text style={styles.adText}>
                                Address
                        </Text>
                        </View>
                        <View style={styles.adViews}>
                            <Text style={styles.adItems}>
                                City:
                        </Text>
                            <Text style={{ marginLeft: 5, fontSize: 15, color: 'black' }}>{empDatas.address.city}</Text>
                        </View>
                        <View style={styles.adViews}>
                            <Text style={styles.adItems}>
                                GEO:
                        </Text>
                            <Text style={{ marginLeft: 5, fontSize: 15, color: 'black' }}>{empDatas.address.geo.lat} | {empDatas.address.geo.lng}</Text>
                        </View>
                        <View style={styles.adViews}>
                            <Text style={styles.adItems}>
                                STREET:
                        </Text>
                            <Text style={{ marginLeft: 5, fontSize: 15, color: 'black' }}>{empDatas.address.street}</Text>
                        </View>
                        <View style={styles.adViews}>
                            <Text style={styles.adItems}>
                                SUITE:
                        </Text>
                            <Text style={{ marginLeft: 5, fontSize: 15, color: 'black' }}>{empDatas.address.suite}</Text>
                        </View>
                        <View style={styles.adViews}>
                            <Text style={styles.adItems}>
                                ZIPCODE:
                        </Text>
                            <Text style={{ marginLeft: 5, fontSize: 15, color: 'black' }}>{empDatas.address.zipcode}</Text>
                        </View>
                    </View>
                    <View style={styles.phSection}>

                        <Text style={styles.adItems}>Phone: </Text>
                        <Text>{empDatas.phone ? empDatas.phone : 'Not available'}</Text>
                    </View>
                    <View style={styles.webSection}>
                        <Text style={styles.adItems}>Website: </Text>
                        <Text>{empDatas.website ? empDatas.website : 'Not available'}</Text>
                    </View>
                    <View style={styles.comSection}>
                        <View style={styles.adView}>
                            <Text style={styles.adText}>
                                Company Details
                        </Text>
                        </View>
                        <View style={styles.adViews}>
                            <Text style={styles.adItems}>
                                Company Name:
                        </Text>
                            <Text style={{ marginLeft: 5, fontSize: 15, color: 'black' }}>{empDatas?.company?.name ? empDatas?.company?.name : 'Not Available'}</Text>
                        </View>
                        <View style={styles.adViews}>
                            <Text style={styles.adItems}>
                                BS:
                        </Text>
                            <Text style={{ marginLeft: 5, fontSize: 15, color: 'black' }}>{empDatas?.company?.bs ? empDatas?.company?.bs : 'Not Available'}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headView: {
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 25
    },
    adText: {
        marginTop: 4,
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    headText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    adView: {
        backgroundColor: '#8a8a5c',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    adItems: {
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 17,
        color: 'black'
    },
    flatView: {
        flex: 1,
    },
    flatView2: {
        marginLeft: 30,
    },
    topView: {
        flexDirection: 'row'
    },
    image: {
        height: 120,
        width: 120,
        borderRadius: 10,
    },
    textView: {
        marginLeft: 15
    },
    name: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    adViews: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
    },
    info: {
        justifyContent: 'center',
        marginLeft: 10
    },
    usrname: {
        fontSize: 15,
    },
    email: {
        fontSize: 15,
    },
    companyName: {
        fontSize: 20
    },
    sections: {
        backgroundColor: '#ccccb3',
        height: 70,
        width: Dimensions.get('window').width - 60,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 5,
        alignItems: 'center',
        flexDirection: 'row'
    },
    adSection: {
        backgroundColor: '#ccccb3',
        height: 170,
        width: Dimensions.get('window').width - 60,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 5,
    },
    phSection: {
        backgroundColor: '#ccccb3',
        height: 70,
        width: Dimensions.get('window').width - 60,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 5,
        alignItems: 'center',
        flexDirection: 'row'
    },
    webSection: {
        backgroundColor: '#ccccb3',
        height: 70,
        width: Dimensions.get('window').width - 60,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 5,
        alignItems: 'center',
        flexDirection: 'row'
    },
    comSection: {
        backgroundColor: '#ccccb3',
        height: 90,
        width: Dimensions.get('window').width - 60,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 5,
    }
})