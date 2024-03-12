import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Image style = {styles.container}
      source={{uri:'https://i.pinimg.com/236x/13/39/45/133945eeba7b7f0d0775ee9babb07ef5.jpg'}}
      />
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
    height: 800,
  },
});
