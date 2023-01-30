import React, {useState} from 'react';
import {Alert, Button, SafeAreaView, StyleSheet, Text} from 'react-native';

function App() {
  const [t, setT] = useState('Response');
  const [t1, setT1] = useState('Response');
  const [t2, setT2] = useState('Response');
  const [t3, setT3] = useState('Response');
  const [t4, setT4] = useState('Response');

  const ui = (
    <SafeAreaView style={styles.main}>
      <Text style={styles.text}>{t}</Text>
      <Text style={styles.text}>{t1}</Text>
      <Text style={styles.text}>{t2}</Text>
      <Text style={styles.text}>{t3}</Text>
      <Text style={styles.text}>{t4}</Text>
      <Button title="Send Request" onPress={f1} />
    </SafeAreaView>
  );

  function f1() {
    var obj2 = {x: 100, y: 300};
    var json2 = JSON.stringify(obj2);
    var reqobj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'json=' + json2,
    };

    var reqeust = fetch('http://10.0.2.2/React_PHP/index.php', reqobj);

    reqeust
      .then(response => response.json())
      .then(json => {
        setT(json.name);
        setT1(json.gender);
        setT2(json.mobile);
        setT3(json.x);
        setT4(json.y);
      })
      .catch(error => {
        Alert.alert('error', error);
      });
  }

  return ui;
}

export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingVertical: 20,
  },
});
