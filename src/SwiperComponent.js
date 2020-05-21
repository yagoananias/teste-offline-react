import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function SwiperComponent() {
  return (
    <View style={styles.container}>
      <Text>Swiper Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SwiperComponent
