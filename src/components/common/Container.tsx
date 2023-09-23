import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import PropTypes from 'prop-types';
import {Header} from './Header';

export const Container = ({
  canGoBack = false,
  title,
  children,
}: {
  canGoBack?: boolean;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <View style={styles.container}>
      <Header title={title} canGoBack={canGoBack} />
      <ScrollView contentContainerStyle={{flex: 1, paddingHorizontal: 16}}>
        {children}
      </ScrollView>
    </View>
  );
};

Container.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string.isRequired,
  canGoBack: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {backgroundColor: 'white', flex: 1},
});
