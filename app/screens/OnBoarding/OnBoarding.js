import React from 'react';
import {
  ScrollView,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Animated,
  Image,
} from 'react-native';
// import {COLORS} from '../../constants';

//constants
import {images, theme} from '../../constants';
const {onbaording1, onbaording2, onbaording3} = images;

// theme
const {COLORS, FONTS, SIZES} = theme;

// Dummy Data
const onBoardings = [
  {
    title: "Let's Travelling",
    description:
      'Just one small positive thought in the morning can change your whole day',
    img: onbaording1,
  },
  {
    title: 'Navigation',
    description: "Opportunities don't happen, you create them",
    img: onbaording2,
  },
  {
    title: 'Destination',
    description: 'It is never too late to be what you might have been',
    img: onbaording3,
  },
];

// export default function OnBoarding() {
const OnBoarding = () => {
  //Render
  function renderContent() {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment={'center'}>
        {onBoardings.map((item, index) => (
          <View key={index} style={{width: SIZES.width}}>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={item.img}
                resizeMode="cover"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>{renderContent()}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
});

export default OnBoarding;
