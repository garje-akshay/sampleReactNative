import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native';


const Registeration = ({ navigation }: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = () => {
    var Name = name
    var Email = email;
    var Password = password;

    if (Name.length == 0 || Email.length == 0 || Password.length == 0) {
      Alert.alert(
        "Required field is Missing ...!");
    }
    else {
      var InsertAPIURL = "https://siddhiamale.000webhostapp.com/api_insert.php";
      var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application.json'
      };
      var Data = {
        Name: Name,
        Email: Email,
        Password: Password
      };

      fetch(InsertAPIURL,
        {
          method: 'POST',
          body: JSON.stringify(Data)
        }
      )
        .then((response) => response.json())
        .then((response) => {
          //RESET STATES
          setEmail('');
          setPassword('')
          setName('')

          console.log("response", response)
          Alert.alert(response?.message);
        }
        )
        .catch((error) => {
          console.log("error", error)
          Alert.alert("Error" + error);
        })
    }
  };

  const handleAll = () => {
    var GetAPIURL = "https://siddhiamale.000webhostapp.com/api_fetch_all.php";

    fetch(GetAPIURL,
      {
        method: 'GET'
      }
    )
      .then((response) => response.json())
      .then((response) => {
        console.log("response", response)
        navigation.navigate('Home', { data: response })
      }
      )
      .catch((error) => {
        Alert.alert("Error" + error);
      })
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Register</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
          textContentType="password"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleRegistration}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText} >Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={handleAll}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonAllText} >ALL</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
};

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
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonAllText: {

    color: '#fff',
    fontWeight: 'bold',
  }
});

export default Registeration;