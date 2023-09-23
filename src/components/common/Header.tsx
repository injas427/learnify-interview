import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';

export const Header = ({title = '', canGoBack = false}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <View>
        {canGoBack && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>Go back</Text>
          </TouchableOpacity>
        )}
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View />
    </View>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  canGoBack: PropTypes.bool,
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 54,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBlockColor: '#00000010',
    borderBottomWidth: 1,
  },
  title: {
    fontWeight: '600',
    color: '#000000',
    fontSize: 18,
  },
});
