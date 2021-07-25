import React, { useState } from "react";
import { Text, View, Button, TextInput, StyleSheet } from "react-native";
import { globalStyle } from "../styles/style";
import {Formik} from 'formik';

export default function Form({submitHandler}) {
    return (
        <View>
            <Formik initialValues={{name: '', anons: '', key: Date.now(), description: '', img: ''}}
                    onSubmit={(values, action) => {
                        submitHandler(values);
                        action.resetForm
                    }}>
                {(props) => (
                    <View>
                        <TextInput style={styles.input}
                                   value={props.values.name}
                                   placeholder="Введите название"
                                   onChangeText={props.handleChange('name')}/>
                        <TextInput style={styles.input}
                                   value={props.values.anons}
                                   placeholder="Введите анонс"
                                   multiline
                                   onChangeText={props.handleChange('anons')}/>
                        <TextInput style={styles.input} 
                                   value={props.values.description}
                                   multiline
                                   placeholder="Введите статью"
                                   onChangeText={props.handleChange('description')}/>     
                        <TextInput style={styles.input}
                                   value={props.values.img}
                                   placeholder="Приложите фото"
                                   onChangeText={props.handleChange('img')}/>
                        <Button title="Добавить" onPress={props.handleSubmit}/>                            
                    </View>
                )}
            </Formik>
        </View>
    ) 
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        marginTop: 15,
        padding: 15,
        borderColor: 'silver',
        borderRadius: 5
    }
});