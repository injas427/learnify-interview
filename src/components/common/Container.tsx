import React from 'react';
import {ScrollView, View} from 'react-native';

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
    <View>
      <Header title={title} canGoBack={canGoBack} />
      <ScrollView>{children}</ScrollView>
    </View>
  );
};

Container.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string.isRequired,
  canGoBack: PropTypes.bool,
};
