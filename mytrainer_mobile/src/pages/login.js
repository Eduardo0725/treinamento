import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import api from '../api/api';

function Login({ navigation }){
    const [ cpf, setCpf ] = useState('');
    const [ senha, setSenha ] = useState('');

    async function loadAccount(){
        const response = await api.get('/personals',{
            params:{
                cpf,
            }
        })
        /*
        if(response.data[0]){
            if(response.data[0].senha == senha){
                navigation.navigate('Main',{ nome:'nome' })
            }else{
                alert('Senha ou CPF incorreto')
            }
        }else{
            alert('Senha ou CPF incorreto')
        }*/
        //OU
        try{
            if(response.data[0] == [])
            throw erro;
            if(response.data[0].senha != senha)
            throw erro;
            navigation.navigate('Main',{ nome:'nome' })
        }catch(erro){
            alert('Senha ou CPF incorreto')
        }
    }
    



    return (
        <KeyboardAvoidingView 
            behavior={'padding'} 
            style={styles.container} 
            keyboardVerticalOffset={40} 
            >
            <Text style={styles.titleStyle} >MyTrainer</Text>
            <TextInput 
                style={styles.textInputStyle} 
                placeholder='CPF' 
                placeholderTextColor='#999' 
                autoCorrect={false} //desativa a auto correção
                keyboardType='numeric' //deixa somente numeros disponiveis no teclado do smartphone
                value={cpf}
                onChangeText={setCpf}
            />
            <TextInput 
                style={styles.textInputStyle} 
                placeholder='Senha' 
                placeholderTextColor='#999'
                autoCorrect={false} //desativa a auto correção
                autoCapitalize='none' //Não deixa que o corretor interfira na senha, usado mais para não começar com letra maiuscula
                keyboardType='ascii-capable' //aceita qualquer caracteres, mas com mascara de bolinhas
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={true}
            />
            <TouchableOpacity 
                style={styles.buttomStyle} 
                onPress={() => {loadAccount()}/*()=>{ 
                }*/}

                >
                <Text style={styles.textStyle} >Entrar</Text>
            </TouchableOpacity>
            <Text style={styles.accountStyle} >Criar conta</Text>
        </KeyboardAvoidingView>
    )

    
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff'
    },
    titleStyle:{
        fontSize:40,
        marginBottom:90,
        marginTop:-40,
    },
    textInputStyle:{
        width:300,
        height:25,
        backgroundColor:'#fff',
        borderTopColor:'#fff',
        borderRightColor:'#fff',
        borderBottomColor:'#999',
        borderLeftColor:'#999',
        borderWidth:2,
        marginBottom:25,
        fontSize:20,
        paddingHorizontal:5,
    },
    buttomStyle: {
        backgroundColor: '#000',
        width: 250,
        height:50,
        borderRadius:25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        elevation: 6,
    },
    textStyle:{
        color:'#fff',
        fontSize:18,
    },
    accountStyle:{
        marginTop:15,
        color:'#000',
    },
})

export default Login;