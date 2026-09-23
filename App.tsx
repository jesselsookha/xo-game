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

  // Decide what block's tile should display, based on its current value
  const contentFor = (block: number): string => {
    switch (block) {
      case 1:
        return 'X';
      case 2:
        return 'O';
      default:
        return '';
    }
  };

  // Checks all 8 possible winning lines: 3 rows, 3 columns, 2 diagonals
  // winner stays 0 while the game is still in progress or drawn
  let winner: number = 0;
  if (block1 > 0 && block1 === block2 && block2 === block3) winner = block1;
  if (block4 > 0 && block4 === block5 && block5 === block6) winner = block4;
  if (block7 > 0 && block7 === block8 && block8 === block9) winner = block7;
  if (block1 > 0 && block1 === block4 && block4 === block7) winner = block1;
  if (block2 > 0 && block2 === block5 && block5 === block8) winner = block2;
  if (block3 > 0 && block3 === block6 && block6 === block9) winner = block3;
  if (block1 > 0 && block1 === block5 && block5 === block9) winner = block1;
  if (block3 > 0 && block3 === block5 && block5 === block7) winner = block3;

  // handlePress is shared by all nine tiles.
  // block: the tile's current value (0, 1, or 2)
  // setBlock: the specific setter for that tile (setBlock1 ... setBlock9)
  // Passing the setter in as a parameter is what allows one function
  // to update any of the nine tiles, instead of needing nine functions.
  const handlePress = (block: number, setBlock: (value: number) => void) => {
    if (winner !== 0) return; // stop game after winner is chosen

    // how do we stop the user from pressing the same button twice? 
    if (block !== 0) {
      return; // tile already played
    }

    // set the block based on who played it
    player1Turn ? setBlock(1) : setBlock(2);

    setPlayer1Turn(!player1Turn);
  };

  return(
    <View style={styles.container}>
      <Text style={styles.title}>{player1} vs. {player2}</Text>

      <Text>
        {player1Turn ? `${player1}'s Turn` : `${player2}'s Turn`}
      </Text>

      {/* Board layout: 3 rows of 3 cells */}
      <View>
        <View style={styles.row}>
          <TouchableHighlight 
	        style={styles.cell} 
            onPress={() => handlePress(block1, setBlock1)}
          >
            <Text style={styles.cellText}>{contentFor(block1)}</Text>
          </TouchableHighlight>
          <TouchableHighlight 
	        style={styles.cell} 
            onPress={() => handlePress(block2, setBlock2)}
       	  >
            <Text style={styles.cellText}>{contentFor(block2)}</Text>
          </TouchableHighlight>
          <TouchableHighlight 
	        style={styles.cell} 
            onPress={() => handlePress(block3, setBlock3)}
          >
            <Text style={styles.cellText}>{contentFor(block3)}</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.row}>
          <TouchableHighlight 
	        style={styles.cell} 
            onPress={() => handlePress(block4, setBlock4)}
          >
            <Text style={styles.cellText}>{contentFor(block4)}</Text>
          </TouchableHighlight>
          <TouchableHighlight 
	        style={styles.cell} 
            onPress={() => handlePress(block5, setBlock5)}
          >
            <Text style={styles.cellText}>{contentFor(block5)}</Text>
          </TouchableHighlight>
          <TouchableHighlight 
	        style={styles.cell} 
            onPress={() => handlePress(block6, setBlock6)}
          >
            <Text style={styles.cellText}>{contentFor(block6)}</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.row}>
          <TouchableHighlight 
	        style={styles.cell} 
	        onPress={() => handlePress(block7, setBlock7)}
          >
            <Text style={styles.cellText}>{contentFor(block7)}</Text>
          </TouchableHighlight>
          <TouchableHighlight 
	        style={styles.cell} 
            onPress={() => handlePress(block8, setBlock8)}
          >
            <Text style={styles.cellText}>{contentFor(block8)}</Text>
          </TouchableHighlight>
          <TouchableHighlight 
            style={styles.cell} 
            onPress={() => handlePress(block9, setBlock9)}
          >
            <Text style={styles.cellText}>{contentFor(block9)}</Text>
          </TouchableHighlight>
        </View>
      </View>

      {winner === 1 && <Text style={styles.title}>{player1} Wins!</Text>}
      {winner === 2 && <Text style={styles.title}>{player2} Wins!</Text>}
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