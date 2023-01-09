import React from 'react';
import {
  ScrollView,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Animated,
  Image,
  TouchableOpacity,
} from 'react-native';
import {color} from 'react-native-reanimated';
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
  const [completed, setCompleted] = React.useState(false);

  const scrollX = new Animated.Value(0);

  React.useEffect(() => {
    //To check if user has finished scrolling the onboarding pages
    scrollX.addListener(({value}) => {
      if (Math.floor(value / SIZES.width) === onBoardings.length - 1) {
        setCompleted(true);
      }
    });

    return () => scrollX.removeListener();
  }, []);

  //Render
  function renderContent() {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment={'center'}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}>
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
            <View
              style={{
                position: 'absolute',
                bottom: '10%',
                right: 40,
                left: 40,
              }}>
              <Text
                style={{...FONTS.h2, color: COLORS.gray, textAlign: 'center'}}>
                {item.title}
              </Text>
              <Text
                style={{
                  ...FONTS.body3,
                  color: COLORS.gray,
                  textAlign: 'center',
                  marginTop: SIZES.base,
                }}>
                {item.description}
              </Text>
            </View>
            {/*Button */}
            <TouchableOpacity
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: 150,
                height: 60,
                paddingLeft: 20,
                justifyContent: 'center',
                borderTopLeftRadius: 30,
                borderBottomLeftRadius: 30,
                backgroundColor: COLORS.blue,
              }}
              onPress={() => console.log('Button Pressed')}>
              <Text style={{...FONTS.h1, color: COLORS.white}}>
                {completed ? 'Lets GO' : 'Skip'}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </Animated.ScrollView>
    );
  }

  function renderDots() {
    const dotPosition = Animated.divide(scrollX, SIZES.width);
    return (
      <View style={styles.dotContainer}>
        {onBoardings.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });
          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [SIZES.base, 17, SIZES.base],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              opacity={opacity}
              style={[
                styles.dot,
                {width: dotSize, height: dotSize},
              ]}></Animated.View>
          );
        })}
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>{renderContent()}</View>
      <View style={styles.dotRootContainer}>{renderDots()}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  dotRootContainer: {
    position: 'absolute',
    bottom: SIZES.height > 700 ? '25%' : '20%',
  },
  dotContainer: {
    flexDirection: 'row',
    height: SIZES.padding,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    backgroundColor: COLORS.blue,
    borderRadius: SIZES.radius,
    marginHorizontal: SIZES.radius / 2,
  },
});

export default OnBoarding;
