import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Bullet = ({ text, style }) => (
  <View style={styles.bullet}>
    <Text style={style}>{'\u2022 '}</Text>
    <Text style={style}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  bullet: {
    flexDirection: 'row',
  },
});

export default Bullet;
