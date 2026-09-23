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
  const [player1Turn, setPlayer1Turn] = useState<boolean>(true);

  // Each block holds one of three values:
  // 0 - not yet played | 1 - Player 1 played here | 2 - Player 2 played here
  const [block1, setBlock1] = useState<number>(0);
  const [block2, setBlock2] = useState<number>(0);
  const [block3, setBlock3] = useState<number>(0);
  const [block4, setBlock4] = useState<number>(0);
  const [block5, setBlock5] = useState<number>(0);
  const [block6, setBlock6] = useState<number>(0);
  const [block7, setBlock7] = useState<number>(0);
  const [block8, setBlock8] = useState<number>(0);
  const [block9, setBlock9] = useState<number>(0);

  // Decide what block1's tile should display, based on its current value
  let block1Content: string;
  if (block1 === 0) {
    block1Content = '';
  } else if (block1 === 1) {
    block1Content = 'X';
  } else {
    block1Content = 'O';
  }

  // This above block of statements (declaration and nested if..then) will need to be
  // duplicated for the 8 remaining blocks

  const handlePress = (index: number) => {
    console.log(`Cell ${index} pressed`);
    if (player1Turn){
      setBlock1(1); 
    } else {
      setBlock1(2);
    }
    setPlayer1Turn(!player1Turn);
  };

  return(
    <View style={styles.container}>
      <Text style={styles.title}>{player1} vs. {player2}</Text>

      <Text>
        {player1Turn ? `${player1}'s Turn` : `${player2}'s Turn`}
      </Text>

      {/* Board layout: 3 rows of 3 cells
          Note the very first Touchable and its Text component 
      */}
      <View style={styles.row}>
        <TouchableHighlight style={styles.cell} onPress={() => handlePress(0)}>
          <Text style={styles.cellText}>{block1Content}</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.cell} onPress={() => handlePress(1)}>
          <Text style={styles.cellText}></Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.cell} onPress={() => handlePress(2)}>
          <Text style={styles.cellText}></Text>
        </TouchableHighlight>
      </View>
      <View style={styles.row}>
        <TouchableHighlight style={styles.cell} onPress={() => handlePress(3)}>
          <Text style={styles.cellText}></Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.cell} onPress={() => handlePress(4)}>
          <Text style={styles.cellText}></Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.cell} onPress={() => handlePress(5)}>
          <Text style={styles.cellText}></Text>
        </TouchableHighlight>
      </View>
      <View style={styles.row}>
        <TouchableHighlight style={styles.cell} onPress={() => handlePress(6)}>
          <Text style={styles.cellText}></Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.cell} onPress={() => handlePress(7)}>
          <Text style={styles.cellText}></Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.cell} onPress={() => handlePress(8)}>
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