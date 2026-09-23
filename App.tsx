import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableHighlight } from 'react-native';

// NavigationContainer wraps the whole app and manages navigation state
import { NavigationContainer } from '@react-navigation/native';
// createNativeStackNavigator builds a stack-based navigator using native transitions
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={PlayerScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function PlayerScreen({ navigation }: any){
    const [player1, setPlayer1] = useState<string>('');
  const [player2, setPlayer2] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Tic-Tac-Toe!</Text>

      <TextInput
        placeholder="Player 1 Name"
        value={player1}
        onChangeText={setPlayer1}
        style={styles.input}
      />
      <TextInput
        placeholder="Player 2 Name"
        value={player2}
        onChangeText={setPlayer2}
        style={styles.input}
      />

      <Button
        title="Start Game"
        onPress={() => navigation.navigate('Game', {player1: player1, player2: player2})}
      />
    </View>
  );
}

function GameScreen({ navigation, route} : any){
  const { player1, player2 } = route.params; 
  return(
    <View style={styles.container}>
      <Text style={styles.title}>{player1} vs. {player2}</Text>

      {/* Board layout: 3 rows of 3 cells, each an empty tile for now */}
      <View style={styles.row}>
        <TouchableHighlight style={styles.cell}>
          <Text style={styles.cellText}></Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.cell}>
          <Text style={styles.cellText}></Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.cell}>
          <Text style={styles.cellText}></Text>
        </TouchableHighlight>
      </View>
      <View style={styles.row}>
        <TouchableHighlight style={styles.cell}>
          <Text style={styles.cellText}></Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.cell}>
          <Text style={styles.cellText}></Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.cell}>
          <Text style={styles.cellText}></Text>
        </TouchableHighlight>
      </View>
      <View style={styles.row}>
        <TouchableHighlight style={styles.cell}>
          <Text style={styles.cellText}></Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.cell}>
          <Text style={styles.cellText}></Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.cell}>
          <Text style={styles.cellText}></Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginVertical: 8,
    width: '80%',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
  },
  cellText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});