import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {UserDetailsType} from '../types/User';

const UserModal: React.FunctionComponent<Partial<UserDetailsType>> = props => {
  const {avatar, name, email, city, dateOfBirth = '', gender} = props;

  const date: Date = new Date(dateOfBirth);
  const formattedDateOfBirth =
    date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();

  return (
    <View style={[StyleSheet.absoluteFill, styles.modal]} pointerEvents="none">
      <View style={styles.modalContainer}>
        <Image source={{uri: avatar}} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.text}>Email - {email}</Text>
          <Text style={styles.text}>City - {city}</Text>
          <View style={styles.birthDetails}>
            <Text style={styles.text}>
              Date of Birth - {formattedDateOfBirth}
            </Text>
            <Text style={styles.text}>
              Gender - {gender === 'male' ? '♂️' : '♀️'}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e2e2e276',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingVertical: 20,
    marginVertical: 20,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 20,
  },
  modalContainer: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  birthDetails: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    fontSize: 17,
  },
});

export default UserModal;
