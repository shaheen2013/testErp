import { StatusBar } from 'expo-status-bar';
import {  useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js/react-native';

Pusher.logToConsole = true;


const client = new Pusher("3", {
  authEndpoint: "http://erp-back.test/broadcasting/auth",
  cluster: "mt1",
  wsHost: "erp-back.test",
  wsPort: 6001,
  enabledTransports: ["ws",'wss'],
  forceTLS: false,
  auth: {
    headers: {
      Authorization: 'Bearer XXXXXXXXXXXX',
    }
  },
});

export default function App() {
  useEffect(() => {

    const echo = new Echo({
      broadcaster: "pusher",
      client,
      disableStats: true,      
    });
    console.log(echo)
   }, []);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Staring react native zahid ere</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
