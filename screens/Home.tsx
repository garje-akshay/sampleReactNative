import {
  View, Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native'
import React from 'react'

const Home = ({ navigation, route }: any) => {
  return <ScrollView >
    {route.params.data.map((d: any) => {
      return <View key={d.Id} style={styles.list}>
        <Text style={styles.title}>{d.Name}</Text>
        <Text style={styles.sub_title}>{d.Email}</Text>
        <TouchableOpacity
          onPress={() => Alert.alert(`${d.Name} is Deleted`)}
        >
          <Text>DELETE</Text>
        </TouchableOpacity>
        <Text style={styles.title}>----------------------------</Text>

      </View>

    })}

  </ScrollView>
}

const styles = StyleSheet.create({
  list: {
    display: 'flex',
    flex: 1,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',

  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  sub_title: {
    fontSize: 16,
    marginBottom: 20,
  },
});


export default Home;