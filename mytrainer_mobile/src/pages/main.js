import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Image } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';

function Main(){
    const [ currentRegion, setCurrentRegion ] = useState(null);
    const [ refreshScreen, setRefreshScreen ] = useState(null);
    const Imagem = 'https://avatars2.githubusercontent.com/u/55118089?v=4'

    useEffect(() => {
        async function loadInitialPosition(){
            
            const { granted } = await requestPermissionsAsync();

            if(granted){
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });
                
                const { latitude, longitude } = coords;
                
                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04,
                })

                setRefreshScreen({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04,
                })

            }
        }   
        loadInitialPosition();
    },[]);

    function handleRegionChanged(region){
        setCurrentRegion(region);
    }
    
    if(!currentRegion){
        return null;
    }
    
    return(
        <>

        
        <MapView
            onRegionChange={handleRegionChanged} 
            initialRegion={refreshScreen} 
            style={styles.map} 
        >
            <Marker 
                coordinate={{ 
                    latitude:currentRegion.latitude, 
                    longitude:currentRegion.longitude 
                }} 
            >
                <Image 
                    style={styles.imagePointStyle}
                    source={{uri:Imagem}}
                />
            </Marker>
        </MapView>

        <KeyboardAvoidingView 
        behavior='padding' 
        style={styles.styleView} 
        keyboardVerticalOffset={100} 
        >
            <TextInput 
                style={styles.textInputStyle}
                placeholder='Buscar por nome'
                placeholderTextColor='#999'
                autoCapitalize='words'
                autoCorrect={false}
            />
            <TouchableOpacity style={styles.buttomStyle}>
                <MaterialIcons  name='my-location' size={20} color='#fff' />
            </TouchableOpacity>
        </KeyboardAvoidingView>


        </>
    )
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
    imagePointStyle:{
        width:54,
        height:54,
    },
    styleView:{
        position: 'absolute',
        bottom:20,
        left:20,
        right:20,
        zIndex:5,
        flexDirection: 'row',
    },
    textInputStyle: {
        backgroundColor:'#fff',
        color: '#333',
        flex:1,
        height:50,
        paddingHorizontal:20,
        borderRadius: 25,
        fontSize:16,
        shadowColor:'#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width:4,
            height:4,
        },
        elevation: 4,
    },
    buttomStyle: {
        backgroundColor: '#000',
        width: 50,
        height:50,
        borderRadius:25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        elevation: 6,
    },
});




export default Main;