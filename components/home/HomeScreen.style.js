import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        margin: SIZES.xSmall,
        padding: SIZES.xSmall
    },
    headerBtnText: {
        fontWeight: 'bold',
        fontSize: SIZES.large,
        color: COLORS.white
    },
    headerBtn: {
        fontSize: SIZES.large,
        backgroundColor: COLORS.primary,
        padding: SIZES.large,
        borderRadius: SIZES.small,
        marginTop: SIZES.xLarge,
    },
    headerImg: {
        width: SIZES.xImage,
        height: SIZES.xImage,
    }
});

export default styles;