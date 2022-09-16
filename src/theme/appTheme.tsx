import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    container: {
        flex: 1,
        //backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    fondo: {
        backgroundColor: 'white',
        flex: 1,
    },
    title: {
        fontSize: 30,
        marginBottom: 10
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        flex: 1,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 10,
        // },
        // shadowOpacity: 0.24,
        // shadowRadius: 7.84,
        // elevation: 10,
        shadowColor: "red",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        
        elevation: 24,
    },
    image: {
        flex: 1,
        borderRadius: 20,
    },

});