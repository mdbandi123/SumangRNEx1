import { Image, StyleSheet, View } from "react-native";
import Header from "./src/components/Header";
import Body from "./src/components/Body";

export default function App(){
  return(
    <View style={styles.mainCont}>
      <Header/>
      <Body/>
    </View>
  )
}

const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
    backgroundColor: '#dbdbcc',
  }
})