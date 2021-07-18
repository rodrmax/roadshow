import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
} from "react-native";

// import { logo } from './components/images'

export default function Home({ navigation, route }) {
  const [load, setLoad] = useState(false);
  const [router, setRouter] = useState(route.name);

  function handleEntrar() {
    setLoad(true);
    setTimeout(() => {
      navigation.navigate("Evento");
      setTimeout(() => {
        setRouter("Evento");
      }, 500)
    }, 3000);
  }

  function resetStatusLoad() {
    setRouter("Home");
    setLoad(false);
  }

  useEffect(() => {
    resetStatusLoad();
    console.log(router);
  }, [router]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image_logo}
        source={require("../assets/images/logomarca.png")}
      />
      <Text style={styles.titulo}>Road Show</Text>

      {load ? (
        <Image
          style={styles.loading}
          source={require("../assets/images/loading.gif")}
        />
      ) : (
        <TouchableHighlight
          style={{
            height: 43,
            width: 260,
            borderRadius: 10,
            backgroundColor: "#EEDD82",
            borderColor: "#EEE8AA",
            borderWidth: 1,
            marginLeft: 50,
            marginRight: 50,
            marginTop: 20,
          }}
        >
          <Button
            onPress={() => handleEntrar()}
            title="Entrar"
            accessibilityLabel="Enter Evento Page"
          ></Button>
        </TouchableHighlight>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8DC",
    alignItems: "center",
    justifyContent: "center",
  },
  image_logo: {
    width: 200,
    height: 200,
  },
  loading: {
    marginTop: 10,
    width: 50,
    height: 50,
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
  },
});
