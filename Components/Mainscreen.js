import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Mainscreen = () => {

    const [input, setInput] = useState('');

    const handle = (text) => {
        setInput(input + text);
    };

    const handleC = () =>{
        setInput('');
    };

    const handleEqual = () => {
        try {
          const result = eval(input);
          setInput(result.toString());
        } catch (error) {
          setInput('Error');
        }
      };
    return (
      <View style={styles.container}>
        <View style={styles.container3}>
            <Text style={styles.text2}>{input}</Text>
        </View>
        <View style={styles.container2}>
            <TouchableOpacity style={styles.button4} onPress={() => handleC('C')}>
                <Text style = {styles.text}>C</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handle('(')}>
                <Text style = {styles.text}>(</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handle(')')}>
                <Text style = {styles.text}>)</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={() => handle('/')}>
                <Text style = {styles.text}>/</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handle('7')}>
                <Text style = {styles.text}>7</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handle('8')}>
                <Text style = {styles.text}>8</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handle('9')}>
                <Text style = {styles.text}>9</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={() => handle('*')}>
                <Text style = {styles.text}>*</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handle('4')}>
                <Text style = {styles.text}>4</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handle('5')}>
                <Text style = {styles.text}>5</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handle('6')}>
                <Text style = {styles.text}>6</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={() => handle('-')}>
                <Text style = {styles.text}>-</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handle('1')}>
                <Text style = {styles.text}>1</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handle('2')}>
                <Text style = {styles.text}>2</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handle('3')}>
                <Text style = {styles.text}>3</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={() => handle('+')}>
                <Text style = {styles.text}>+</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.button0} onPress={() => handle('0')}>
                <Text style = {styles.text}>0</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handle('.')}>
                <Text style = {styles.text}>.</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.button3} onPress={() => handleEqual('=')}>
                <Text style = {styles.text}>=</Text> 
            </TouchableOpacity>
        </View>
      </View> 
    );
  };

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        width: '100%',
        height:'100%',
        flexWrap: 'wrap',
    },
    container2:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        width: '100%',
        height: '40%',
        flexWrap: 'wrap',
        marginVertical: '1%'
    },
    container3:{
        flex:0.7,
        flexDirection:'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: "white",
        width: '100%',
        height: '40%',
        flexWrap: 'wrap',
        borderRadius:10
    },

    button0: {
        backgroundColor: "grey", 
        height: '20%',
        width: '44%',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '2%',
        marginVertical: '1%',
        borderRadius: 10
    },
    button: {
        backgroundColor: "grey", 
        height: '20%',
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '2%',
        marginVertical: '1%',
        borderRadius: 10
    },
    button2: {
        backgroundColor: "darkorange", 
        height: '20%',
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '2%',
        marginVertical: '1%',
        borderRadius: 10
    },
    button3: {
        backgroundColor: "cadetblue", 
        height: '20%',
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '2%',
        marginVertical: '1%',
        borderRadius: 10
    },
    button4: {
        backgroundColor: "pink", 
        height: '20%',
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '2%',
        marginVertical: '1%',
        borderRadius: 10,
    },


    text: {
        fontSize: 30,
        color: 'black'
    },
    text2: {
        fontSize: 60,
        color: 'black',
    }

});

export default Mainscreen;

