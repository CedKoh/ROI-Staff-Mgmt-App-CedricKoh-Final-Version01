import React from 'react';
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as actions from '../actions';
import { Card, Title, Paragraph, Avatar, IconButton } from 'react-native-paper';

const styles = StyleSheet.create({
    card: {
        marginTop: 20
    },
    title: {
        top: 20,
        left: 80,
        fontSize: 24,
    },
    image: {
        height: 100,
    },
    action: {
        backgroundColor: '#262626',
        color: '#D9D9D9',
    },
    icon: {
        position: 'absolute',
        top: 15,
        left: 0,
        color: 'white',
        backgroundColor: 'rgba(59,59,59,0)',
    },
});

const PeopleItem = (props) => {
    
    const {firstName, lastName, company} = props.people

    const getAvatarLabel = (firstName, lastName) => {

        return `${firstName[0]}${lastName[0]}`.toUpperCase()
    }

    return (
        <TouchableWithoutFeedback 
            onPress={() => props.selectPerson(props.people)}>
            <View>
                <Card.Title
                    title={`${firstName} ${lastName}`}
                    subtitle={`${company}`}
                    left={(props) => <Avatar.Text color={'white'} style={{backgroundColor: '#3b3b3b'}} size={24} {...props} label={getAvatarLabel(firstName, lastName)} />}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default connect(null, actions)(PeopleItem);
