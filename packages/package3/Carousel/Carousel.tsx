import * as React from "react";
import { Dimensions, Text, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import ICarousel, {
  ICarouselInstance
} from "react-native-reanimated-carousel";
 
const data = [...new Array(6).keys()];
const width = Dimensions.get("window").width;

export const Carousel = () => {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);
  
  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };
 
  return (
    <View style={{ flex: 1 }}>
      <ICarousel
        ref={ref}
        width={width}
        height={width / 2}
        data={data}
        renderItem={({ index }) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: "center",
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 30 }}>{`Page ${index}`}</Text>
          </View>
        )}
      />
    </View>
  );
}
