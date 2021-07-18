import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableHighlight, Image } from "react-native";

import lstEventos from "../mock/eventos.json";

import img from "../assets/images/img-250x250.png";
import { ScrollView } from "react-native-gesture-handler";

const EventoDetalhe = ({ navigation, route }) => {
  const [objevento, setEvento] = useState({});

  const eventoId = route.params.id;

  function ShowDetalhe() {
    const ev = lstEventos.find((item) => item.id === eventoId);
    setEvento(ev);
  }

  function backEventPage() {
    navigation.navigate("Evento");
  }
  useEffect(() => {
    ShowDetalhe();
  }, [objevento]);

  return (
    <>
      <View style={styles.container}>
        <View
          style={{ backgroundColor: "#cf3517", minHeight: "50%", zIndex: 1 }}
        ></View>
        <View
          style={{ backgroundColor: "#363636", minHeight: "50%", zIndex: 1 }}
        ></View>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "column",
          margin: 20,
          marginTop: "20%",
          position: "absolute",
          backgroundColor: "#fff",
          borderRadius: 5,
          padding: 15,
        }}
      >
        <ScrollView>
          <View
            style={{
              minWidth: 250,
              minHeight: 250,
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 30,
            }}
          >
            <Image source={require("../assets/images/img-250x250.png")} />
          </View>
          <View style={styles.descEvento}>
            <Text style={styles.infor}>Detalhe: {objevento.evento}</Text>
            <Text style={styles.infor}>Local: {objevento.local}</Text>
            <Text style={styles.infor}>Descrição: {objevento.descricao}</Text>
          </View>
          <TouchableHighlight onPress={() => {}}>
            <View style={styles.buttonPage}>
              <Text style={styles.descButton}>Inscrever</Text>
            </View>
          </TouchableHighlight>
  
          <TouchableHighlight  onPress={() => backEventPage()}>
            <View style={styles.buttonPage}>
              <Text style={styles.descButton}>Voltar</Text>
            </View>
          </TouchableHighlight>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  descEvento: {
    marginBottom: 30,
  },
  buttonPage: {
    alignItems: "center",
    backgroundColor: "#1E90FF",
    padding: 8,
    marginBottom: 10,
  },
  descButton: {
    color: "#fff",
    fontSize: 20,
  },
  infor: {
      fontSize: 16,
      marginBottom: 10,
  },
});

export default EventoDetalhe;
