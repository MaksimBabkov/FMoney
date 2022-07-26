import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { defaultState } from './src/defaultState'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons/faCreditCard'
import { faChartLine } from '@fortawesome/free-solid-svg-icons/faChartLine'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons/faCartArrowDown'
import { connect, useSelector } from 'react-redux'

const App = () => {

  const count = useSelector((state) => state.countReducer.count)

  const [balanse, setBalanse] = useState(defaultState.basicBalance)

  const getCountBalance = () => setBalanse(prevCount => prevCount - 100);
  const postCountBalance = () => setBalanse(prevCount => prevCount + 1000);

  return (
    <View style={{ flex: 1 }}>
      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: '#006600'
      }}>
        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>FMoney</Text>
      </View>

      <View style={{
        height: '80%',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Text style={{ fontWeight: 'bold', fontSize: 50, color: '#000000' }}>{balanse}.{count} &#8381;</Text>
      </View>

      <View style={styles.container}>
        <View style={[styles.position, styles.background]}>
          <FontAwesomeIcon style={{ color: '#006600' }} icon={faChartLine} size={25} />
        </View>

        <TouchableWithoutFeedback onPress={getCountBalance}>
          <View style={[styles.position, styles.backgroundCenter]}>
            <FontAwesomeIcon style={{ color: '#333333' }} icon={faCartArrowDown} size={32} />
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={postCountBalance}>
          <View style={[styles.position, styles.background]}>
            <FontAwesomeIcon style={{ color: '#006600' }} icon={faCreditCard} size={25} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#006600',
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
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
    width: 60,
    height: 60
  },
  backgroundCenter: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#006600',
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

export default connect()(App);
