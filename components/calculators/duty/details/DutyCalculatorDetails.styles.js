import { StyleSheet } from "react-native";
import { COLORS, SIZES } from '../../../../constants'


const styles = StyleSheet.create({
    container: {
        margin: 6,
        padding: 6,
    },
    textInput: {
        backgroundColor: COLORS.gray2,
        borderRadius: 10,
        fontSize: 16,
        padding: 12,
        marginVertical: 8,
    },
    textLabel: {
        marginTop: 14,
        fontSize: 18,
        letterSpacing: 2,
        textShadowRadius: 2,
        textAlign: 'center', // adjust 
    },
    dropDown: {

    },
    dropDownItem: {

    },
    submitButton: {
        backgroundColor: COLORS.primary,
        borderRadius: 18,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        elevation: 2,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 10
    },
    btntext: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'

    },
});

export default styles;