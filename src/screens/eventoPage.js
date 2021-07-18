import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Button,
} from "react-native";

import eventos from "../mock/eventos.json";

const EventoPage = ({ navigation }) => {
  
  function onHandleDetail(id) {
    navigation.navigate("Detalhe", { id });
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {eventos.map((item, index) => (
          <View style={styles.list} key={index}>
            <View style={styles.inforEvento}>
                <Text style={{paddingBottom: 8}}>Evento: {item.evento}</Text>
                <Text>Data: {item.data}</Text>
            </View>
            <View>
                <Button
                    onPress={() => onHandleDetail(item.id)}
                    title="Detalhe"
                ></Button>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 30,
    marginTop: StatusBar.currentHeight || 0,
  },
  list: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: "white",
    borderRadius: 5,
    height: 100,
    padding: 10,
    shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,

    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inforEvento: {
    maxWidth: "75%"
  },
});

export default EventoPage;
