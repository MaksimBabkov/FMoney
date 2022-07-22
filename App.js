import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

const App = () => {

  return (
    <View style={{ flex: 1 }}>
      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: '#FFCC00'
       }}>
        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>FMoney</Text>
      </View>

       <View style={{
        height: '80%',
        // backgroundColor: '#FFCCCC',
         alignItems: 'center',
         justifyContent: 'center'
       }}>
        <Text>Kontent</Text>
       </View>

      <View style={styles.container}>
        <View style={[styles.position, styles.background]}>
          <Text>Оля</Text>
        </View>
        <View style={[styles.position, styles.backgroundCenter]}>
          <Text style={styles.font}>+</Text>
        </View>
        <View style={[styles.position, styles.background]}>
          <Text>Макс</Text>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFCC00',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  },
  position: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  background: {
    borderRadius: 100,
    width: 60,
    height: 60
  },
  backgroundCenter: {
    elevation: 10,
    borderRadius: 100,
    width: 80,
    height: 80,
    marginTop: -100
  },
  font: {
    color: 'black',
    fontSize: 50
  },
})

export default App;
