import React, { useContext } from 'react';
import {View, FlatList, Alert} from 'react-native';
import { ListItem, Avatar} from 'react-native-elements'
import FunciContext from '../context/FunciContexto'


export default props => {

     const {state, dispatch} = useContext(FunciContext)
    
   
    function confirmFuncDeletion(funci) {
        Alert.alert('Excluir Funcionario', 'Tem certeza que Deseja excluir o Funcionário?', [
          {
            text: 'Sim',
            onPress() {
               
              dispatch({
                type: 'deleteFunc',
                payload: funci,
              });
            },
          },
          {
            text: 'Não',
          },
        ]);
      }
   
   
     getFuncItem = ({item: funci}) => {  
       
        return (
            <ListItem 
              key={funci.id}
              bottomDivider
              onPress={()=>props.navigation.navigate('UserForm', funci)}
           
            >
                <Avatar source={{uri: funci.avatarUrl}} />
                <ListItem.Content>
                  <ListItem.Title>{funci.nome}</ListItem.Title>
                  <ListItem.Subtitle>{funci.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron
                    name="edit"
                    size={27}
                    color="blue"
                    onPress={() => props.navigation.navigate('UserForm', funci)}
                />
                  <ListItem.Chevron
                    name="delete"
                    size={27}
                    color="red"
                    onPress={() => confirmFuncDeletion(funci)}
                />

           </ListItem>
        )
     }

    return (
        <View style={{flex:1}}>
          <FlatList
            keyExtractor={funcionario => funcionario.id.toString()}
            data={state.funci}
            renderItem={getFuncItem}
          />

        
        </View>
    )
}

