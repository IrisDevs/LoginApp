import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button } from 'react-native';
import React, {useState} from 'react';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);


const SignIn = async () =>{
    try {
      setLoading(true);
      await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }
}

const SignUp = async () =>{
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }
 }

    return(
        <View style={styles.container}>
            <TextInput value={email} style={styles.input} placeholder='Email' autoCapitalize='none' onChangeText={(text) => setEmail(text)}></TextInput>
            <TextInput secureTextEntry={true} value={password} style={styles.input} placeholder='Password' autoCapitalize='none' onChangeText={(text) => setPassword(text)}></TextInput>

            { loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
            ) : ( 
            <>
            <Button title="Login" onPress={SignIn} />
            <Button title="Crée un compte" onPress={SignUp} />
            </>
            )}
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 16,
        paddingHorizontal: 10,
    }
});

export default Login;