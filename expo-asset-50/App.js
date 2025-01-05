import { StyleSheet, Text, View } from 'react-native';

import { Asset } from 'expo-asset';

const { uri, hash } = Asset.fromModule(require('./assets/icon.png'));

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        {`Icon URI: ${uri}, hash: ${hash}`}
      </Text>
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
