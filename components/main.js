import React, { useState } from "react";
import { 
    Text,
    View,
    TouchableOpacity,
    FlatList, 
    Image, 
    StyleSheet, 
    Modal,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Ionicons } from '@expo/vector-icons';
import { globalStyle } from "../styles/style";
import Form from './form';

export default function Main({navigation}) {
    const loadScene = () => {
        navigation.navigate('contact');
    };
    const [showModalDialog, setShowModalDialog] = useState(false);
    const imageUrl = 'https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg';
    const [news, setNews] = useState([{
        name: 'Google', 
        anons: 'Google!!!',
        description: 'google is cool',
        key: '1',
        img: imageUrl
    }, {
        name: 'Apple', 
        anons: 'Apple!!!',
        description: 'Apple is cool',
        key: '2',
        img: imageUrl
    }, {
        name: 'Facebook', 
        anons: 'Facebook!!!',
        description: 'Facebook is cool',
        key: '3',
        img: imageUrl
    }]);

    const addArticle = (article) => {
        setNews((news) => [article, ...news]);
        setShowModalDialog(false);
    };

    return (
        <View style={globalStyle.main}>
            <Modal visible={showModalDialog}>
                <View style={globalStyle.main}>
                    <Ionicons name="close-circle-sharp"
                              size={40}
                              color="gray" 
                              style={styles.iconClose}
                              onPress={() => setShowModalDialog(false)} />
                    <Text style={styles.title}>Добавлятор статей</Text>
                    <Form submitHandler={addArticle}/>
                </View>
            </Modal>
            <Text style={[globalStyle.title, styles.header]}>Главная страница</Text>
            <Ionicons style={styles.icon}
                      name="add-circle-sharp" 
                      size={40} color="green"
                      onPress={() => setShowModalDialog(true)} />
             <FlatList data={news} renderItem={({item}) => (
                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('fullInfo', item)}>
                    <Image style={styles.image} source={{
                        uri: item.img
                    }}/>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.anons}>{item.anons}</Text>
                </TouchableOpacity>
            )}/>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginBottom: 30
    },
    item: {
        width: '100%',
        marginBottom: 30
    },
    title: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 22,
        color: '#474747'
    },
    anons: {
        textAlign: 'center',
        marginTop: 5,
        fontSize: 16,
        color: '#474747'
    },
    image: {
        width: '60%',
        height: 200
    },
    icon: {
        textAlign: 'center',
        marginBottom: 25
    },
    iconClose: {
        textAlign: 'center'
    }
});