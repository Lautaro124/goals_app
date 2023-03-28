import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function App () {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inpoutContainer}>
        <TextInput style={styles.textInputObject} placeholder='Write me' />
        <Button title='Touch me' />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals..</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },
  inpoutContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#cccccc',
    marginBottom: 26
  },
  textInputObject: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
    borderRadius: 4
  },
  goalsContainer: {
    flex: 6
  }
})
