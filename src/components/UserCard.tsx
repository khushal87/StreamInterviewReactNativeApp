import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export type UserCardType = {
  name: string;
  avatar: string;
  phoneNumber: string;
};

const UserCard: React.FunctionComponent<UserCardType> = React.memo(props => {
  const {name, avatar, phoneNumber} = props;
  return (
    <View>
      <View style={styles.card}>
        <Image source={{uri: avatar}} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.name}>{name}</Text>
          <Text>{phoneNumber}</Text>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  name: {
    fontWeight: 'bold',
  },
});

export default UserCard;
