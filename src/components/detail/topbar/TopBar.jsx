import { View, StyleSheet } from 'react-native'
import React from 'react'
import CircleButton from '../../common/circle_button/CircleButton';


const TopBar = ({ popBack }) => {
  return (
    <View style={styles.container}>
      <CircleButton
        buttonIcon={'arrow-left'}
        onPress={popBack}
      />
      <CircleButton
        buttonIcon={'bookmark'}
      />
    </View>
    // <Appbar.Header>
    //   <Appbar.BackAction/>
    //   <Appbar.Content/>
    //   {/* <Appbar.Action icon={'calendar'}/> */}
    //   <Appbar.Action icon={'bookmark-outline'}/>
    // </Appbar.Header>
  )
}

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-between',
  },
  buttonContainer: {
      borderRadius: 100/2,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 4
  },
})

export default TopBar