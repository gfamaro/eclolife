import { View, Text, StyleSheet, Image } from "react-native"


const StatusCard = ({ item }: any) => {
    return(
        <View style={styles.container}>
            <Text style={styles.textName}>{item.name}</Text>
            <View style={styles.viewPrincipal}>
                
                {/* TEXTOS E DADOS */}
                <View style={{
                    height: '100%',
                    width: '75%',
                    borderRightWidth: 1,
                    justifyContent: 'space-evenly',
                    paddingHorizontal: 20,
                    paddingVertical: 10
                }}>
                   <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                        <Text style={styles.textStats}>TEMPERATURA:</Text>
                        <Text>{item.temperatura}°C</Text>
                    </View> 
                    <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                        <Text style={styles.textStats}>UMIDADE:</Text>
                        <Text>{item.umidade}%</Text>
                    </View> 
                    <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                        <Text style={styles.textStats}>QUANT. DE OVOS:</Text>
                        <Text>{item.qntOvos}</Text>
                    </View> 
                    <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                        <Text style={styles.textStats}>DIAS PARA ECLOSÃO:</Text>
                        <Text>{item.diasEclo}</Text>
                    </View> 
                </View>
                
                {/* IMAGEM ON/OFF */}
                <View style={{
                    height: '100%',
                    width: '25%',
                    justifyContent: 'center'
                }}>
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/128/889/889754.png' }}
                        style={{
                            height: 70,
                            width: 70,
                            alignSelf: 'center'
                        }}
                    />
                </View>
            </View>
        </View>
    )
}

export default StatusCard

const styles = StyleSheet.create({
    container: {
        height: 170,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 5
    },
    textName: {
        fontSize: 16,
        fontWeight: 'bold',
        margin: 3
    },
    viewPrincipal: {
        flex: 1,
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row'
    },
    textStats: {
        fontWeight: 'bold'
    },
    

})