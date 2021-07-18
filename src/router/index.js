import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens";
import EventoPage from "../screens/eventoPage"
import EventoDetalhe from "../screens/eventoDetalhe"

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Evento" component={EventoPage} />
        <Stack.Screen name="Detalhe" component={EventoDetalhe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
