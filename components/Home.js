import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {globalStyles} from '../styles/global';

import ReviewList from './ReviewList';

const Home = ({navigation}) => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'Kill Bill - VOl.1',
      rating: 8,
    },
    {
      id: 2,
      name: 'Kill Bill - VOl.2',
      rating: 8,
    },
    {
      id: 3,
      name: 'Pulp Fiction',
      rating: 9,
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ReviewDetail', item)}>
            <ReviewList review={item} keyExtractor={item => item.id} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
