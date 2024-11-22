import { ScrollView, Text, StyleSheet } from "react-native";

export default function Body(){
  return(
    <ScrollView 
      style={styles.scrollViewOuter} 
      contentContainerStyle={styles.scrollViewInner}>
      <Text style={styles.text}>
      Young and full of running
      tell me where is that taking me?
      just a great figure eight
      or a tiny infinity?
      </Text>
      <Text style={styles.text}>
      love is really nothing
      but a dream that keeps waking me
      for all of my trying
      we still end up dying
      how can it be?
      </Text>
      <Text style={styles.text}>
      don't say a word
      just come over and lie here with me
      'cause I'm just about to set fire to everything I see
      </Text>
      <Text style={styles.text}>
      I want you so bad I'll go back on the things I believe
      there I just said it
      I'm scared you'll forget about me
      </Text>
      <Text style={styles.text}>
      so young and full of running
      all the way to the edge of desire
      steady my breathing
      silently screaming
      I have to have you now
      </Text>
      <Text style={styles.text}>
      wired and I'm tired
      think I'll sleep in my clothes on the floor
      Or maybe this mattress will spin on its axis
      and find me on yours
      </Text>
      <Text style={styles.text}>
      don't say a word
      just come over and lie here with me
      cause I'm just about to set fire to everything I see
      </Text>
      <Text style={styles.text}>
      I want you so bad I'll go back on the things I believe
      there I just said it
      I'm scared you'll forget about me
      </Text>
      <Text style={styles.text}>
      don't say a word
      just come over and lie here with me
      cause I'm just about to set fire to everything I see
      </Text>
      <Text style={styles.text}>
      I want you so bad I'll go back on the things I believe
      there I just said it
      I'm scared you'll forget about me
      </Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollViewOuter: {
    flex: 1,
    marginTop: 20,
  },
  scrollViewInner: {
    marginTop: 15,
    paddingBottom: 30,
    gap: 15,
    marginHorizontal: '10%'
  },
  text: {
    fontSize: 17,
    color: '#1F132A',
  }
})