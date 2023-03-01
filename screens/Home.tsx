import {
  View, Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'
import React from 'react'

const Home = ({ navigation, route }: any) => {
  return <>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('About')}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonText} >Next</Text>
    </TouchableOpacity>
    {route.params.data.map((d: any) => {
      return <View style={styles.list}><Image
        style={styles.tinyLogo}
        source={{ uri: d.avatar }}
      /><Text style={styles.title}>{d.first_name}</Text></View>
    })}

  </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  list: {
    display: 'flex',
    flex: 1, width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    padding: 10,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007AFF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonNext: {
    width: '100%',
    height: 50,
    marginTop: 20,
    backgroundColor: '#007AFF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});


export default Home;