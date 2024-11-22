import {View, Image, StyleSheet, Text} from "react-native";
 
export default function Header(){
  return (
    <View style={styles.headerCont}>
      <View>
        <Image 
          source={require('../../assets/img/edgeofdesire.jpg')} 
          style={styles.img} 
          resizeMode="cover"/>
      </View>
      <View style={styles.titleCont}>
        <Text style={styles.title}>Edge of Desire</Text>
        <Text style={styles.singer}>John Mayer</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerCont: {
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 40,
    marginHorizontal: '10%'
  },
  img: {
    width: '100',
    height: '100'
  },
  titleCont: {
    justifyContent: 'center'
  },
  title: {
    fontSize: 30,
    color: '#1F132A',
    fontWeight: 500
  },
  singer: {
    fontSize: 17,
    color: '#7a2e01'
  }
});