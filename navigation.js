import React from 'react';
import Main from './components/main';
import FullInfo from './components/fullInfo';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Navigate() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="main"
                              component={Main}
                              options={{
                                        title: 'Главная',
                                        headerStyle: {
                                            backgroundColor: '#eb5d3d',
                                            height: 100
                                        }}}/>
                <Stack.Screen name="fullInfo"
                              component={FullInfo}
                              options={{title: 'Контакты'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}