import React from 'react';
import {View, Text} from 'react-native';

import {globalStyles} from '../styles/global';

const ReviewDetail = ({navigation}) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>{navigation.getParam('name')}</Text>
    </View>
  );
};

export default ReviewDetail;
