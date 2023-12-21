import { View, StyleSheet, TextInput } from 'react-native'

// Bui Duc Ha - 21520797
const AuthTextInput = ({
    value,
    onChangeText,
    placeholder,
    leadingIcon=null,
    trailingIcon=null,
    secureTextEntry=false
}) => {
  return (
    <View style={styles.container}>
        {
            leadingIcon
        }
        <TextInput
            value={value}
            style={styles.textInput}
            placeholder={placeholder}
            placeholderTextColor={'black'}
            secureTextEntry={secureTextEntry}
            onChangeText={value => onChangeText(value)}
            autoCapitalize="none"
            autoCompleteType="off"
            autoCorrect={false}
        />
        {
            trailingIcon
        }
    </View>
  )
}
// Bui Duc Ha - 21520797
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 0.5,
        borderRadius: 8,
        borderColor: 'gray',
        alignItems: 'center',
        paddingHorizontal: 8
    },
    textInput: {
        flex: 1,
        paddingVertical:16,
        marginStart: 8
    }
})

export default AuthTextInput
