import React, {useState, useContext} from 'react';
import {Text, View, TextInput, StyleSheet, Button, Alert, KeyboardAvoidingView} from 'react-native'

import FunciContexto from '../context/FunciContexto'

export default ({route, navigation}) => {
  

    const [funci, setFunci] = useState(route.params ? route.params : {});

    const {dispatch} = useContext(FunciContexto)

    const [errorEmail, setErrorEmail] = useState(null);

   const validar = ()=>{
    
     const parse = funci.email
     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    if (!re.test(String(parse).toLowerCase())){
      setErrorEmail("Preencha seu e-mail corretamente")
     
      Alert.alert("Erro", "email estar em branco ou fora do padrão")
      return false
    }
    Alert.alert("Sucesso", "email cadastrado com sucesso")
       return true
     
   }

   const salvar = ()=>{
      if (validar()){
      
        dispatch({
            type: funci.id ? 'updateFunci' : 'createFunci',
            payload: funci
        })  
        navigation.goBack() 

      }   

   }

   return (
      <KeyboardAvoidingView>
        <View  style={style.formulario}>
           <Text> Nome: </Text>
            <TextInput
                style={style.input}
                onChangeText={nome => setFunci({...funci, nome})}
                placeholder= "informe nome do funcionário"
                value={funci.nome}
            />
            <Text> Sobre Nome: </Text>
             <TextInput
                style={style.input}
                onChangeText={sobrenome => setFunci({...funci, sobrenome})}
                placeholder= "informe sobre nome do funcinário"
                value={funci.sobrenome}
            />
             <Text> E-MAIL: </Text>
             <TextInput
                style={style.input}
                onChangeText={email => setFunci({...funci, email})}
                placeholder= "Digite o email do funcionário"
                value={funci.email}
                keyboardType="email-address"
                errorMessage={errorEmail}
            />
             <Text> NIS: </Text>
             <TextInput
                style={style.input}
                onChangeText={nis => setFunci({...funci, nis})}
                placeholder= "Digite o nis(PIS)"
                value={funci.nis}
            />
            <Text> Foto: </Text>
             <TextInput
                style={style.foto}
                onChangeText={avatarUrl => setFunci({...funci, avatarUrl})}
                placeholder= "Digite uma url para foto"
                value={funci.avatarUrl}
            />
           
            <Button
               title="Salvar"
               onPress={()=> salvar()}
            />

          </View> 
        </KeyboardAvoidingView>
    )
}


const style = StyleSheet.create({
    formulario: {
      padding: 12,
      marginTop: 10
    },
    input: {
      height: 44,
      borderColor: '#4682B4',
      borderWidth: 4,
      marginBottom: 15,
      paddingLeft: 7
    },
    foto: {
        height: 44,
        borderColor: '#4682B4',
        borderWidth: 4,
        marginBottom: 105,
        paddingLeft: 7,
       
    }
  });