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
  let block1Content: string;
  switch (block1) {
    case 0:
      block1Content = '';
      break;
    case 1:
      block1Content = 'X';
      break;
    case 2:
      block1Content = 'O';
      break;
    default:
      block1Content = '';
  }

  let block2Content: string;
  switch (block2) {
    case 0:
      block2Content = '';
      break;
    case 1:
      block2Content = 'X';
      break;
    case 2:
      block2Content = 'O';
      break;
    default:
      block2Content = '';
  }

  let block3Content: string;
  switch (block3) {
    case 0:
      block3Content = '';
      break;
    case 1:
      block3Content = 'X';
      break;
    case 2:
      block3Content = 'O';
      break;
    default:
      block3Content = '';
  }

  let block4Content: string;
  switch (block4) {
    case 0:
      block4Content = '';
      break;
    case 1:
      block4Content = 'X';
      break;
    case 2:
      block4Content = 'O';
      break;
    default:
      block4Content = '';
  }

  let block5Content: string;
  switch (block5) {
    case 0:
      block5Content = '';
      break;
    case 1:
      block5Content = 'X';
      break;
    case 2:
      block5Content = 'O';
      break;
    default:
      block5Content = '';
  }

  let block6Content: string;
  switch (block6) {
    case 0:
      block6Content = '';
      break;
    case 1:
      block6Content = 'X';
      break;
    case 2:
      block6Content = 'O';
      break;
    default:
      block6Content = '';
  }

  let block7Content: string;
  switch (block7) {
    case 0:
      block7Content = '';
      break;
    case 1:
      block7Content = 'X';
      break;
    case 2:
      block7Content = 'O';
      break;
    default:
      block7Content = '';
  }

  let block8Content: string;
  switch (block8) {
    case 0:
      block8Content = '';
      break;
    case 1:
      block8Content = 'X';
      break;
    case 2:
      block8Content = 'O';
      break;
    default:
      block8Content = '';
  }

  let block9Content: string;
  switch (block9) {
    case 0:
      block9Content = '';
      break;
    case 1:
      block9Content = 'X';
      break;
    case 2:
      block9Content = 'O';
      break;
    default:
      block9Content = '';
  }

  const handlePress = (index: number) => {
    console.log(`Cell ${index} pressed`);

    /*
    if (index === 0) {
      if (player1Turn){
        setBlock1(1); 
      } else {
        setBlock1(2);
      }
    }
    */

    if (index === 0) {
      player1Turn ? setBlock1(1) : setBlock1(2);
    }

    if (index === 1) {
      player1Turn ? setBlock2(1) : setBlock2(2);
    }

    if (index === 2) {
      player1Turn ? setBlock3(1) : setBlock3(2);
    }

    if (index === 3) {
      player1Turn ? setBlock4(1) : setBlock4(2);
    }

    if (index === 4) {
      player1Turn ? setBlock5(1) : setBlock5(2);
    }
    
    if (index === 5) {
      player1Turn ? setBlock6(1) : setBlock6(2);
    }

    if (index === 6) {
      player1Turn ? setBlock7(1) : setBlock7(2);
    }

    if (index === 7) {
      player1Turn ? setBlock8(1) : setBlock8(2);
    }
    
    if (index === 8) {
      player1Turn ? setBlock9(1) : setBlock9(2);
    }

    setPlayer1Turn(!player1Turn);
  };

  return(
    <View style={styles.container}>
      <Text style={styles.title}>{player1} vs. {player2}</Text>

      <Text>
        {player1Turn ? `${player1}'s Turn` : `${player2}'s Turn`}
      </Text>

      {/* Board layout: 3 rows of 3 cells */}
      <View style={styles.row}>
        <TouchableHighlight style={styles.cell} onPress={() => handlePress(0)}>
          <Text style={styles.cellText}>{block1Content}</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.cell} onPress={() => handlePress(1)}>
          <Text style={styles.cellText}>{block2Content}</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.cell} onPress={() => handlePress(2)}>
          <Text style={styles.cellText}>{block3Content}</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.row}>
        <TouchableHighlight style={styles.cell} onPress={() => handlePress(3)}>
          <Text style={styles.cellText}>{block4Content}</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.cell} onPress={() => handlePress(4)}>
          <Text style={styles.cellText}>{block5Content}</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.cell} onPress={() => handlePress(5)}>
          <Text style={styles.cellText}>{block6Content}</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.row}>
        <TouchableHighlight style={styles.cell} onPress={() => handlePress(6)}>
          <Text style={styles.cellText}>{block7Content}</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.cell} onPress={() => handlePress(7)}>
          <Text style={styles.cellText}>{block8Content}</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.cell} onPress={() => handlePress(8)}>
          <Text style={styles.cellText}>{block9Content}</Text>
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