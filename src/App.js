import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UserList from './views/UserList.js';
import UserForm from './views/UserForm';
import { Button} from 'react-native-elements/dist/buttons/Button';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import {FunciProvider} from './context/FunciContexto'

const Stack = createStackNavigator()

export default props => {
    return (
       <FunciProvider> 
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="UserList"
                    screenOptions={screenOptions}
                    >
                    <Stack.Screen
                        name="UserList"
                        component={UserList}
                        options={({navigation}) =>{
                            return {
                                title: "Lista de Funcionarios",
                                headerRight: ()=> (
                                    <Button
                                        onPress={()=> navigation.navigate("UserForm")}
                                        type="clear"
                                        icon={<Icon name="add" size={28} color="white" />} 

                                    />
                                )
                            }
                        }}
                    />
                    <Stack.Screen
                        name="UserForm"
                        component={UserForm}
                        options={{
                            title: "Formularios de Funcionarios"
                        }}
                    />
                </Stack.Navigator>

            </NavigationContainer>
        </FunciProvider>
    )
}

const screenOptions ={
    headerStyle: {
        backgroundColor: '#00BFFF'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}