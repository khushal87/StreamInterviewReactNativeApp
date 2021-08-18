import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  Pressable,
} from 'react-native';
import axios from 'axios';
import UserCard from './components/UserCard';
import {DUMMY_IMAGE} from './utils/Constants';
import {UserDetailsType} from './types/User';
import UserModal from './components/UserModal';
import Header from './components/Header';

const App = () => {
  const [userDetails, setUserDetails] = useState<UserDetailsType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadMoreData, setLoadMoreData] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [activeUser, setActiveUser] = useState<Partial<UserDetailsType>>({});

  const fetchUserDetails = () => {
    // The API doesn't give any special id to be used as key so I have used name as key
    axios
      .get(`https://randomuser.me/api?results=10&page=${page}`)
      .then(result => {
        const data = result.data.results;
        const essentialData: UserDetailsType[] = data.map((user: any) => {
          if (user && user.name) {
            const name =
              user.name.title + ' ' + user.name.first + ' ' + user.name.last;
            return {
              name: name,
              avatar: user.picture ? user.picture.large : DUMMY_IMAGE,
              phoneNumber: user.phone,
              email: user.email,
              city: user.location ? user.location.city : 'NA',
              dateOfBirth: user.dob ? user.dob.date : 'NA',
              gender: user.gender,
            };
          }
        });
        setUserDetails(
          page === 1 ? essentialData : [...userDetails, ...essentialData],
        );
        setLoading(false);
        setLoadMoreData(false);
      })
      .catch(error => {
        setLoading(false);
        setLoadMoreData(false);
      });
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchMoreData = () => {
    setLoadMoreData(true);
    const currentPage = page;
    setPage(currentPage + 1);
    fetchUserDetails();
  };

  const toggleActiveUser = useCallback(value => setActiveUser(value), []);

  const onPressOutHandler = () => {
    toggleActiveUser({});
  };

  const onLongPressHandler = (item: UserDetailsType) => {
    toggleActiveUser(item);
  };

  const renderItem = ({item}: {item: UserDetailsType}) => {
    return (
      <Pressable
        onLongPress={() => onLongPressHandler(item)}
        onPressOut={onPressOutHandler}>
        <UserCard
          name={item.name}
          avatar={item.avatar}
          phoneNumber={item.phoneNumber}
        />
      </Pressable>
    );
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <Header title="Random user generator" />
      {loading ? (
        <ActivityIndicator color="red" size={40} />
      ) : (
        // We could have used index as a key but that is not a good approach.
        // This can negatively impact performance and may cause issues with component state
        <FlatList
          data={userDetails}
          keyExtractor={item => item.name}
          renderItem={renderItem}
          onEndReachedThreshold={0}
          onEndReached={fetchMoreData}
          ListFooterComponent={
            loadMoreData ? <ActivityIndicator color="red" size={40} /> : null
          }
        />
      )}
      {activeUser.name ? <UserModal {...activeUser} /> : null}
    </SafeAreaView>
  );
};

export default App;
