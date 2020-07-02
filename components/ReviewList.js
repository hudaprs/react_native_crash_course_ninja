import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import {globalStyles} from '../styles/global';

const ReviewList = ({review}) => {
  return (
    <View style={globalStyles.box}>
      <Text style={globalStyles.titleText}>{review.name}</Text>
    </View>
  );
};

ReviewList.propTypes = {
  review: PropTypes.object.isRequired,
};

export default ReviewList;
