import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type HeaderType = {
  title: string;
};

const Header: React.FunctionComponent<HeaderType> = React.memo(({title}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#757ce8',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Header;
